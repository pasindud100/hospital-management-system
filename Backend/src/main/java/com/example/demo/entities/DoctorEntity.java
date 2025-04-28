package com.example.demo.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "doctors")
public class DoctorEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String specialization;
    private String govermentHospital;
    private String phone;
    private String address;

    public DoctorEntity(){

    }
    public DoctorEntity(String name, String specialization, String govermentHospital, String phone, String address) {
        this.name = name;
        this.specialization = specialization;
        this.govermentHospital = govermentHospital;
        this.phone = phone;
        this.address = address;
    }

    public Integer getId(){
        return id;
    }
    public void setId(Integer id){
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getSpecialization(){
        return specialization;
    }
    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
    public String getGovermentHospital(){
        return govermentHospital;
    }
    public void setGovermentHospital(String govermentHospital)
    {
        this.govermentHospital = govermentHospital;
    }
    public String getPhone(){
        return phone;
    }
    public void setPhone(String phone){
        this.phone = phone;
    }
    public String getAddress(){
        return address;
    }
    public void setAddress(String address){
        this.address = address;
    }
}
