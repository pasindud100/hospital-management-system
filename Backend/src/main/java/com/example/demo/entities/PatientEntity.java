package com.example.demo.entities;

/* Author : pasindu
   Place: ACPT student */

import jakarta.persistence.*;

@Entity
@Table(name = "patient_data")
public class PatientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "fname")
    private String fname;

    @Column(name = "gender")
    private String gender;

    @Column(name = "age")
    private int age;

    @Column(name = "address")
    private String address;

    @Column(name = "current_diagnosis")
    private String currentDiagnosis;

    @Column(name = "telephone")
    private String telephone;



    public PatientEntity() {
    }



    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCurrentDiagnosis() {
        return currentDiagnosis;
    }

    public void setCurrentDiagnosis(String currentDiagnosis) {
        this.currentDiagnosis = currentDiagnosis;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
}
