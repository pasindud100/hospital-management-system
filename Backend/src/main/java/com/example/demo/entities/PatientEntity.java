package com.example.demo.entities;

/* Author : pasindu
 place: ACPT student*/

import jakarta.persistence.*;

@Entity //to identify this class as a entity
@Table(name="patient_data") //to spesify table name
public class PatientEntity {

    @Id //mark as a primary key
    @GeneratedValue(strategy = GenerationType.AUTO) // it support to auto increment id
    private int id;

    @Column (name = "fname") //specify column names
    private String fname;

    @Column(name = "lname")
    private String lname;

    @Column(name = "gender")
    private String gender;

    @Column(name = "age")
    private int age;




    //constructor
    public PatientEntity() {

    }



    //getters and setters
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

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
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
}
