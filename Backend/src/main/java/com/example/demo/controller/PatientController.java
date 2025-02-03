package com.example.demo.controller;

/* Author : pasindu
 place: ACPT student*/

import com.example.demo.entities.PatientEntity;
import com.example.demo.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientServices patientServices;

    @PostMapping("/add")
    public PatientEntity addOrUpdatePatient(@RequestBody PatientEntity patient) {
      return patientServices.add(patient);
    }

    @GetMapping("/all")
    public Iterable<PatientEntity> findAllPatient() {
    return patientServices.findAll();
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
