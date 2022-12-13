spisok = [[]];
x = [];
vid = poroda = name = god = vozrast = 0;
alert("Введите то что надо так как надо, без прикольчиков!!")
y = 1;
c = 0;
while(y == 1){
    vid = prompt("Котик или собачка:", "котик или собачка");
    x.push(vid)
    poroda = prompt("Порода:");
    x.push(poroda)
    name = prompt("Кличка:");
    x.push(name)
    god = prompt("Год рождения:");
    x.push(god)
    vozrast = prompt("Сколько полных лет:");
    x.push(vozrast)
    spisok.push(x)
    x = []
    c++;
    if(c < 10){
        y = confirm("Желаете продолжить запись?")
    }
}
console.log(spisok)