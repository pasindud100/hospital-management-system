package com.example.demo.services;

import com.example.demo.entities.DoctorEntity;
import com.example.demo.Repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DoctorService{

    @Autowired
    private DoctorRepository doctorRepository;

    // this save doctor
    public DoctorEntity saveDoctor(DoctorEntity doctor) {
        return doctorRepository.save(doctor);
    }

    // for get all doctors
    public Iterable<DoctorEntity> findAll() {
        return doctorRepository.findAll();
    }

    // to find specific doctor by id
    public DoctorEntity findById(Integer id) {
        return  doctorRepository.findById(id).orElse(null);
    }

    // for delete selected one
    public void deleteDoctor(DoctorEntity doctor) {
        doctorRepository.delete(doctor);
    }
}
