package com.example.demo.services;

import com.example.demo.Repositories.PatientRepository;
import com.example.demo.entities.PatientEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServices {

    @Autowired
    private PatientRepository patientRepository;

    public PatientEntity add(PatientEntity patient) {
        return patientRepository.save(patient);
    }

    public List<PatientEntity> findAll() {
       List<PatientEntity> patients = (List<PatientEntity>) patientRepository.findAll();
        return patients;
    }

    public PatientEntity findById(Integer id) {
        return patientRepository.findById(id).orElse(null);
    }

    public void delete(PatientEntity patient) {
        patientRepository.delete(patient);
    }
}
