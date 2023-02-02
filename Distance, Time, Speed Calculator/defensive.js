/*TASK
In this file, you are going to write a program that will be used to calculate
distance, time, or speed.
● First ask a user to choose whether to calculate distance, time, or speed.
● If the user chooses distance:
○ prompt the user for time
○ prompt the user for speed
○ calculate a distance using the formula: distance = speed × time.
● If the user chooses the time:
○ prompt the user for distance
○ prompt the user for speed
○ calculate a time using the formula: time = distance ÷ speed.
● If the user chooses the speed:
○ prompt the user for distance
○ prompt the user for time
○ calculate a speed using the formula: speed = distance ÷ time.
Use defensive programming when writing this program to anticipate errors and handle them. 
As always remember to comment your code making it clear what you are doing.
*/
while (true){ //asks prompt continuosly if none of these values are added
    try {
        let calc = prompt("Which of these options do you want to calculate? \n distance (d) \n time (t) \n speed (s)")
        let time = 0
        let speed = 0
        let distance = 0


        if (calc == "d"){
            speed = Number(prompt("Insert speed in m/s")) //specified the units for accurate calculations
                while (isNaN(speed) ){ // if variable is not an integer, it'll continue prompting
                    speed = Number(prompt("Not a valid number, please try again. Insert speed in m/s"))
                }
            time = Number(prompt("Insert time in seconds"))
                while (isNaN(time) ){
                    time= Number(prompt("Not a valid number, please try again. Insert time in seconds"))
            }
            distance = speed * time
            console.log(distance)
            alert(distance) //to see the answer instead of going to console
            break
        }

        else if (calc == "t"){
            speed = Number(prompt("Insert speed in m/s"))
                while (isNaN(speed) ){
                    speed = Number(prompt("Not a valid number, please try again. Insert speed in m/s"))
            }
            distance = Number(prompt("Insert distance in m"))
                while (isNaN(distance) ){
                    distance = Number(prompt("Not a valid number, please try again. Insert distance in m"))
            }
            time = distance/speed
            console.log(time)
            alert(time)
            break
        }
        else if (calc == "s"){
            time = Number(prompt("Insert time in seconds"))
                while (isNaN(time) ){
                    time= Number(prompt("Not a valid number, please try again. Insert time in seconds"))
                }
            distance = Number(prompt("Insert distance in m"))
                while (isNaN(distance) ){
                    distance = Number(prompt("Not a valid number, please try again. Insert distance in m"))
                }
            speed = distance/time
            console.log(speed)
            alert(speed)
            break

        }

        else {
            console.log("not valid try again")
            }
        }
    catch(err) {
        console.log(err);

    }
}
