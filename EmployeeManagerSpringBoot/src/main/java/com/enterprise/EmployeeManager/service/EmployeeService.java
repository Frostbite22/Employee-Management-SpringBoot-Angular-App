package com.enterprise.EmployeeManager.service;
import java.util.List;
import java.util.Optional;

import com.enterprise.EmployeeManager.model.Employee;

public interface EmployeeService {
	public Employee addEmployee(Employee employee);
	public List<Employee> findAllEmployees() ; 
	public Employee updateEmployee(Employee employee) ; 
	public void deleteEmployee(Long id) ; 
	public Employee findEmployee(Long id);
}
