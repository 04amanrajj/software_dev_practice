##SUB QUERY
Table: employees
employee_id	employee_name	department	salary
1	Alice	HR	50000
2	Bob     	IT	60000
3	Carol	IT	55000
4	Dave	    HR	70000
5	Eve  	Finance	80000

SQL Query (Subquery Example)
This query retrieves employees whose salary is higher than the average salary of employees in the 'IT' department.

SELECT employee_id, employee_name, department, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = 'IT'
);
Expected Output
employee_id	employee_name	department	salary
1	Alice	HR	50000
4	Dave    	HR	70000
5	Eve  	Finance	80000

##CASE STATEMENT 
Table: students
student_id, student_name, grade
1	Alice	85
2	Bob     	NULL
3	Carol	92
4	Dave    	76

SQL Query
SELECT student_id, student_name, grade,
       CASE 
           WHEN grade IS NULL THEN 'Grade not assigned'
           WHEN grade >= 90 THEN 'A'
           WHEN grade >= 80 THEN 'B'
           WHEN grade >= 70 THEN 'C'
           ELSE 'F'
       END AS grade_category
FROM students;

Expected Output
student_id, student_name, grade, grade_category
1	Alice	85	B
2	Bob	    NULL	 Grade not assigned
3	Carol	92	A
4	Dave	    76	C

##CASE Expression
Table: employees
employee_id	employee_name	department
1	Alice	HR
2	Bob     	IT
3	Carol	Finance
4	Dave    	IT
5	Eve     	HR
SQL Query (Simple CASE Expression Example)
This query categorizes employees into groups based on their department.

SELECT employee_id, employee_name, department,
       CASE department
           WHEN 'HR' THEN 'Human Resources'
           WHEN 'IT' THEN 'Information Technology'
           WHEN 'Finance' THEN 'Financial Department'
           ELSE 'Unknown'
       END AS department_category
FROM employees;
Expected Output
employee_id	employee_name	department	department_category
1	Alice	HR	Human Resources
2	Bob     	IT	Information Technology
3	Carol	Finance	Financial Department
4	Dave    	IT	Information Technology
5	Eve     	HR	Human Resources

##common table expressions
Table: employees
employee_id	employee_name	department	salary
1	Alice	HR	50000
2	Bob	    IT	60000
3	Carol	IT	55000
4	Dave	    HR	70000
5	Eve	    Finance	80000

SQL Query (Using CTE)
The query uses a CTE to calculate the average salary by department, and then uses that result in the main query to filter employees earning above the average salary in their department.

WITH department_avg_salary AS (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
)
SELECT e.employee_id, e.employee_name, e.department, e.salary, das.avg_salary
FROM employees e
JOIN department_avg_salary das
ON e.department = das.department
WHERE e.salary > das.avg_salary;
Expected Output
employee_id	employee_name	department	salary	avg_salary
2	Bob     	IT	60000	57500
4	Dave	    HR	70000	60000
5	Eve	    Finance	80000	80000
