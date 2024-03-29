package com.example.assignment;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.sql.Date;

@Entity
@Table(name = "vw_movie")
public class MovieView {
    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="name")
    private String name;
    @Column(name="release_date")
    private Date releaseDate;
    @Column(name="avg_rating")
    private Float averageRating;


    public void setId(Integer id) {
        this.id = id;
    }
    public Integer getId() {
        return this.id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return this.name;
    }
    public Date getReleaseDate() {
        return this.releaseDate;
    }
    public void setReleaseDate(Date date) {
        this.releaseDate = date;
    }
    public void setAverageRating(Float rating) {
        this.averageRating = rating;
    }
    public Float getAverageRating() {
        return this.averageRating;
    }
}