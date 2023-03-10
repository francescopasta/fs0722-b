package com.example.spring.exceptions;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


@ControllerAdvice
public class UserExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(EntityExistsException.class)
	protected ResponseEntity<String> manageEntityExistsException(EntityExistsException x){
		return new ResponseEntity<String>(x.getMessage() + "MyExceptionHandler", HttpStatus.FOUND);
	}
	
	@ExceptionHandler(EntityNotFoundException.class)
    protected ResponseEntity<String> manageEntityNotFoundException(EntityNotFoundException x){
        return new ResponseEntity<String>(x.getMessage() + " MyExceptionHandler!", HttpStatus.NOT_FOUND);
    } 
	
}
