package com.example.demo.controller;

import com.example.demo.entities.PatientEntity;
import com.example.demo.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin("*")
public class PatientController {

    @Autowired
    private PatientServices patientServices;

    @PostMapping("/add")
    public ResponseEntity<PatientEntity> addOrUpdatePatient(@RequestBody PatientEntity patient) {
        PatientEntity savedPatient = patientServices.add(patient);
        return ResponseEntity.ok(savedPatient);
    }

    @PutMapping("/update/{id}")
    public PatientEntity updatePatient(@PathVariable Integer id, @RequestBody PatientEntity patient) {
        // this for check the patient is exists or not
        PatientEntity existingPatient = patientServices.findById(id);
        if (existingPatient != null) {
            // for change the fields and save the updated data
            existingPatient.setFname(patient.getFname());
            existingPatient.setGender(patient.getGender());
            existingPatient.setAge(patient.getAge());
            existingPatient.setAddress(patient.getAddress());
            existingPatient.setCurrentDiagnosis(patient.getCurrentDiagnosis());
            existingPatient.setTelephone(patient.getTelephone());
            return patientServices.add(existingPatient); // This  updates the existing selected patient
        } else {
            return null; // If patient not found
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<PatientEntity>> findAllPatient() {
        List<PatientEntity> patients = patientServices.findAll();
        return ResponseEntity.ok(patients);
    }

    @GetMapping("/find/{id}")
    public PatientEntity findPatientById(@PathVariable Integer id) {
        return patientServices.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePatient(@PathVariable Integer id) {
        PatientEntity patient = patientServices.findById(id);
        patientServices.delete(patient);
    }
}
