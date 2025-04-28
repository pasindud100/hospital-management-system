package com.example.demo.controller;

import com.example.demo.entities.DoctorEntity;
import com.example.demo.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/add")
    public ResponseEntity<DoctorEntity> addDoctor(@RequestBody DoctorEntity doctor){
        DoctorEntity savedDoctor = doctorService.saveDoctor(doctor);
        return ResponseEntity.ok(savedDoctor);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DoctorEntity> updateDoctor(@PathVariable Integer id, @RequestBody DoctorEntity doctor) {
        DoctorEntity existingDoctor = doctorService.findById(id);
        if (existingDoctor != null){
            //then can update data
            existingDoctor.setName(doctor.getName());
            existingDoctor.setSpecialization(doctor.getSpecialization());
            existingDoctor.setGovermentHospital(doctor.getGovermentHospital());
            existingDoctor.setPhone(doctor.getPhone());
            existingDoctor.setAddress(doctor.getAddress());
            doctorService.saveDoctor(existingDoctor);

            return ResponseEntity.ok(existingDoctor);
        } else {
            return null; // this occuer if doctor not found
        }
    }

    @GetMapping("/all")
    public ResponseEntity< List<DoctorEntity>> findAllDoctors(){
        List < DoctorEntity> doctors = doctorService.findAll();
        return ResponseEntity.ok(doctors);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<DoctorEntity> findDoctorById(@PathVariable Integer id){
        DoctorEntity recievedDoctor =  doctorService.findById(id);
        return ResponseEntity.ok(recievedDoctor);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDoctor(@PathVariable Integer id){
        DoctorEntity doctor = doctorService.findById(id);
        doctorService.deleteDoctor(doctor);
    }
}
