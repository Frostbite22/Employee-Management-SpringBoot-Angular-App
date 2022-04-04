package com.enterprise.EmployeeManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.enterprise.EmployeeManager.service.EmployeeService;
import com.enterprise.EmployeeManager.model.Employee;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/employee")
public class employeeController {

	@Autowired
	private EmployeeService employeeService ; 
	
	@GetMapping("/all")
	public ResponseEntity<List<Employee>> getAllEmployees()
	{
		return new ResponseEntity<> (employeeService.findAllEmployees(),HttpStatus.OK) ;
	}
	
	@GetMapping("find/{id}")
	public ResponseEntity<Employee> getAllEmployees(@PathVariable("id") Long id)
	{
		return new ResponseEntity<> (employeeService.findEmployee(id),HttpStatus.OK) ;
	}
	
	@PostMapping("/add")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee)
	{
		return new ResponseEntity<> (employeeService.addEmployee(employee),HttpStatus.CREATED) ;
	}
	
	@PutMapping("/update")
	public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee)
	{
		return new ResponseEntity<> (employeeService.updateEmployee(employee),HttpStatus.OK) ;
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id)
	{
		employeeService.deleteEmployee(id);
		return new ResponseEntity<> (HttpStatus.OK) ;
	}
	
}
