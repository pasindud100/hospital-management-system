package com.example.demo.controller;

import com.example.demo.entities.DoctorEntity;
import com.example.demo.services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/doctor")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/add")
    public DoctorEntity addDoctor(@RequestBody DoctorEntity doctor){
        return doctorService.saveDoctor(doctor);
    }

    @PutMapping("/update/{id}")
    public DoctorEntity updateDoctor(@PathVariable Integer id, @RequestBody DoctorEntity doctor) {
        DoctorEntity existingDoctor = doctorService.findById(id);
        if (existingDoctor != null){
            //then can update data
            existingDoctor.setName(doctor.getName());
            existingDoctor.setSpecialization(doctor.getSpecialization());
            existingDoctor.setGovermentHospital(doctor.getGovermentHospital());
            existingDoctor.setPhone(doctor.getPhone());
            existingDoctor.setAddress(doctor.getAddress());
            return doctorService.saveDoctor(existingDoctor);
        } else {
            return null; // this occuer if doctor not found
        }
    }

    @GetMapping("/all")
    public Iterable<DoctorEntity> findAllDoctors(){
        return doctorService.findAll();
    }

    @GetMapping("/find/{id}")
    public DoctorEntity findDoctorById(@PathVariable Integer id){
        return doctorService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteDoctor(@PathVariable Integer id){
        DoctorEntity doctor = doctorService.findById(id);
        doctorService.deleteDoctor(doctor);
    }
}
