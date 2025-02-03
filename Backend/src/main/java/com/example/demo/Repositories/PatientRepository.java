package com.example.demo.Repositories;

/* Author : pasindu
 place: ACPT student*/


import com.example.demo.entities.PatientEntity;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepository extends CrudRepository<PatientEntity, Integer> {

    PatientEntity getById(Integer id);

}
