SELECT NO,content FROM post
WHERE
NO = 15 OR
NO = 20 OR
NO = 13 OR
NO = 59;

UPDATE post SET title = '제목15' , content = "내용15"
WHERE NO = 15;

DELETE from post WHERE NO = 15;