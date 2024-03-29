package com.example.assignment;
import org.springframework.data.repository.CrudRepository;
import com.example.assignment.Review;




// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ReviewRepository extends CrudRepository<Review, Integer> {

}
