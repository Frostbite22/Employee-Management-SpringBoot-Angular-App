package com.enterprise.EmployeeManager.service;

import com.enterprise.EmployeeManager.repository.EmployeeRepository;
import com.enterprise.EmployeeManager.exceptions.UserNotFoundException;
import com.enterprise.EmployeeManager.model.Employee ;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EmployeeImpl implements EmployeeService {
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Employee addEmployee(Employee employee) {
		// TODO Auto-generated method stub
		employee.setEmployeeCode(UUID.randomUUID().toString());
		return employeeRepository.save(employee); 
	}
	
	@Override 
	public List<Employee> findAllEmployees()
	{
		return employeeRepository.findAll() ;
	}
	
	@Override 
	public Employee updateEmployee(Employee employee)
	{
		return employeeRepository.save(employee); 
	}
	
	@Override
	public void deleteEmployee(Long id)
	{
		employeeRepository.deleteEmployeeById(id) ; 
	}
	
	@Override 
	public Employee findEmployee(Long id)
	{
		return employeeRepository.findEmployeeById(id)
				.orElseThrow(() ->new UserNotFoundException("User with "+id+" do not exist")) ;
	}
	
	
}
