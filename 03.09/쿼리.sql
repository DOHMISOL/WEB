INSERT INTO student
(NAME, birth)
VALUES
('홍길동', 19900101);

SELECT * FROM student WHERE NO = 5;

UPDATE student SET NAME = '임꺽정' WHERE NO = 5;

DELETE FROM student WHERE NO = 6;
