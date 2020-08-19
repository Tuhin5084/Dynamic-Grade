const bangla = document.getElementById('bangla');
bangla.addEventListener('click', function(){

   generateGrade('bangla-mark', 'banglaGrade', 'banglaPoint');
})


document.getElementById('english').addEventListener('click', function(){
    generateGrade('english-mark', 'englishGrade', 'englishPoint');
})

document.getElementById('ict').addEventListener('click', function(){
    generateGrade('ict-mark', 'ictGrade', 'ictPoint');
})

function generateGrade(mark, grade, point){
    const subjectMark = document.getElementById(mark).value;
    const subjectMarkOutput = calculateGrade(subjectMark);
    const gradePoint = GpaPoint(subjectMarkOutput);
    document.getElementById(grade).innerHTML = subjectMarkOutput;
    document.getElementById(point).innerHTML = gradePoint;
}

function calculateGrade(marks){
    if(marks == ''){
        alert('Invalid Marks Please Enter Your Marks');
    }
    else if(marks >= 0 && marks <= 100){
        if(marks >= 80){
            return 'A+';
        }
        else if(marks >= 70){
            return 'A';
        }
        else if(marks >= 60){
            return 'A-';
        }
        else if(marks >= 50){
            return 'B';
        }
        else if(marks >= 40){
            return 'C';
        }
        else if(marks >= 33){
            return 'D';
        }
        else{
            return 'F';
        }
    }
  
    else{
        alert('Invalid Marks Please Enter Your Marks');
    }
    
}

function GpaPoint(result){
    if(result == 'A+'){
        return 5.00;
    }
    else if(result == 'A'){
        return 4.00;
    }
    else if(result == 'A-'){
        return 3.50;
    }
    else if(result == 'B'){
        return 3.00;
    }
    else if(result == 'C'){
        return 2.50;
    }
    else if(result == 'D'){
        return 2.00;
    }
    else{
        return 0.00;
    }
}

document.getElementById('totalMark').addEventListener('click', function(){
    const banglaMark = document.getElementById('bangla-mark').value;
    const englishMark = document.getElementById('english-mark').value;
    const ictMark = document.getElementById('ict-mark').value;

    const totalSubjectMark = parseFloat(banglaMark) + parseFloat(englishMark) + parseFloat(ictMark);

    document.getElementById('totalMarkCalculate').innerHTML = totalSubjectMark.toFixed(2);

    const banglaPoint = document.getElementById('banglaPoint').innerHTML;
    const englishPoint = document.getElementById('englishPoint').innerHTML;
    const ictPoint = document.getElementById('ictPoint').innerHTML;

    const totalPoint = parseFloat(banglaPoint) + parseFloat(englishPoint) + parseFloat(ictPoint);

    const averagePoint = totalPoint / 3;

    document.getElementById('finalPoint').innerHTML = averagePoint.toFixed(2);

    const averageGrade = finalGradeCalculate(averagePoint);

    if(banglaMark < 33 || englishMark < 33 || ictMark < 33){
        document.getElementById('finalGrade').innerHTML = 'F';
    }

    else{
        document.getElementById('finalGrade').innerHTML = averageGrade;
    }

    
})

function finalGradeCalculate(gpa){

    if(gpa == 5.00){
        return 'A+'
    }
    else if(gpa >= 4.00){
        return 'A';
    }
    else if(gpa >= 3.50){
        return 'A-'
    }
    else if(gpa >= 3.00){
        return 'B';
    }
    else if(gpa >= 2.50){
        return 'C';
    }
    else{
        return 'D';
    }
}