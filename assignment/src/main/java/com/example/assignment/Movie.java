package com.example.assignment;
import java.util.List;

import jakarta.persistence.*;

import java.sql.Date;
/*
to be used for persisting new movies
 */
@Entity
@Table(name = "movie")
public class Movie {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name="name")
    private String name;
    @Column(name="release_date")
    private Date releaseDate;
    @OneToMany(mappedBy="movie",fetch = FetchType.LAZY)
    private List<Review> reviews;

    public Integer getId() {
        return this.id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return this.name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Date getReleaseDate() {
        return this.releaseDate;
    }
    public void setReleaseDate(Date date) {
        this.releaseDate = date;
    }

}