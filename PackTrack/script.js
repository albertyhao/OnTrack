console.log('ni')

// Big lol: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
var stemmer = require('stemmer')
var calcText = `It has two major branches differential calculus and integral calculus Differential calculus concerns instantaneous rates of change and the slopes of curves Integral calculus concerns accumulation of quantities and the areas under and between curves These two branches are related to each other by the fundamental theorem of calculus Both branches make use of the fundamental notions of convergence of infinite sequences and infinite series to a welldefined limit1Infinitesimal calculus was developed independently in the late 17th century by Isaac Newton and Gottfried Wilhelm Leibniz23 Today calculus has widespread uses in science engineering and economics4In mathematics education calculus denotes courses of elementary mathematical analysis which are mainly devoted to the study of functions and limits The word calculus plural calculi is a Latin word meaning originally small pebble this meaning is kept in medicine Because such pebbles were used for calculation the meaning of the word has evolved for meaning method of computation It is therefore used for naming specific methods of calculation and related theories such as propositional calculus Ricci calculus calculus of variations lambda calculus and process calculusModern calculus was developed in 17thcentury Europe by Isaac Newton and Gottfried Wilhelm Leibniz independently of each other first publishing around the same time but elements of it appeared in ancient Greece then in China and the Middle East and still later again in medieval Europe and in IndiaThe ancient period introduced some of the ideas that led to integral calculus but does not seem to have developed these ideas in a rigorous and systematic way Calculations of volume and area one goal of integral calculus can be found in the Egyptian Moscow papyrus 13th dynasty c 1820 BC but the formulas are simple instructions with no indication as to method and some of them lack major components5From the age of Greek mathematics Eudoxus c 408355 BC used the method of exhaustion which foreshadows the concept of the limit to calculate areas and volumes while Archimedes c 287212 BC developed this idea further inventing heuristics which resemble the methods of integral calculus6The method of exhaustion was later discovered independently in China by Liu Hui in the 3rd century AD in order to find the area of a circle7 In the 5th century AD Zu Gengzhi son of Zu Chongzhi established a method89 that would later be called Cavalieris principle to find the volume of a sphereIn the Middle East Hasan Ibn alHaytham Latinized as Alhazen c 965  c 1040 ce derived a formula for the sum of fourth powers He used the results to carry out what would now be called an integration of this function where the formulae for the sums of integral squares and fourth powers allowed him to calculate the volume of a paraboloid10In the 14th century Indian mathematicians gave a nonrigorous method resembling differentiation applicable to some trigonometric functions Madhava of Sangamagrama and the Kerala School of Astronomy and Mathematics thereby stated components of calculus A complete theory encompassing these components is now well known in the Western world as the Taylor series or infinite series approximations11 However they were not able to combine many differing ideas under the two unifying themes of the derivative and the integral show the connection between the two and turn calculus into the great problemsolving tool we have today10John von Neumann12In Europe the foundational work was a treatise written by Bonaventura Cavalieri who argued that volumes and areas should be computed as the sums of the volumes and areas of infinitesimally thin crosssections The ideas were similar to Archimedes in The Method but this treatise is believed to have been lost in the 13th century and was only rediscovered in the early 20th century and so would have been unknown to Cavalieri Cavalieris work was not well respected since his methods could lead to erroneous results and the infinitesimal quantities he introduced were disreputable at firstThe formal study of calculus brought together Cavalieris infinitesimals with the calculus of finite differences developed in Europe at around the same time Pierre de Fermat claiming that he borrowed from Diophantus introduced the concept of adequality which represented equality up to an infinitesimal error term13 The combination was achieved by John Wallis Isaac Barrow and James Gregory the latter two proving the second fundamental theorem of calculus around 1670The product rule and chain rule14 the notions of higher derivatives and Taylor series15 and of analytic functionscitation needed were introduced by Isaac Newton in an idiosyncratic notation which he used to solve problems of mathematical physics In his works Newton rephrased his ideas to suit the mathematical idiom of the time replacing calculations with infinitesimals by equivalent geometrical arguments which were considered beyond reproach He used the methods of calculus to solve the problem of planetary motion the shape of the surface of a rotating fluid the oblateness of the earth the motion of a weight sliding on a cycloid and many other problems discussed in his Principia Mathematica 1687 In other work he developed series expansions for functions including fractional and irrational powers and it was clear that he understood the principles of the Taylor series He did not publish all these discoveries and at this time infinitesimal methods were still considered disreputableThese ideas were arranged into a true calculus of infinitesimals by Gottfried Wilhelm Leibniz who was originally accused of plagiarism by Newton16 He is now regarded as an independent inventor of and contributor to calculus His contribution was to provide a clear set of rules for working with infinitesimal quantities allowing the computation of second and higher derivatives and providing the product rule and chain rule in their differential and integral forms Unlike Newton Leibniz paid a lot of attention to the formalism often spending days determining appropriate symbols for conceptsToday Leibniz and Newton are usually both given credit for independently inventing and developing calculus Newton was the first to apply calculus to general physics and Leibniz developed much of the notation used in calculus today The basic insights that both Newton and Leibniz provided were the laws of differentiation and integration second and higher derivatives and the notion of an approximating polynomial series By Newtons time the fundamental theorem of calculus was knownWhen Newton and Leibniz first published their results there was great controversy over which mathematician and therefore which country deserved credit Newton derived his results first later to be published in his Method of Fluxions but Leibniz published his Nova Methodus pro Maximis et Minimis first Newton claimed Leibniz stole ideas from his unpublished notes which Newton had shared with a few members of the Royal Society This controversy divided Englishspeaking mathematicians from continental European mathematicians for many years to the detriment of English mathematicscitation needed A careful examination of the papers of Leibniz and Newton shows that they arrived at their results independently with Leibniz starting first with integration and Newton with differentiation It is Leibniz however who gave the new discipline its name Newton called his calculus the science of fluxionsSince the time of Leibniz and Newton many mathematicians have contributed to the continuing development of calculus One of the first and most complete works on both infinitesimal and integral calculus was written in 1748 by Maria Gaetana Agnesi1718In calculus foundations refers to the rigorous development of the subject from axioms and definitions In early calculus the use of infinitesimal quantities was thought unrigorous and was fiercely criticized by a number of authors most notably Michel Rolle and Bishop Berkeley Berkeley famously described infinitesimals as the ghosts of departed quantities in his book The Analyst in 1734 Working out a rigorous foundation for calculus occupied mathematicians for much of the century following Newton and Leibniz and is still to some extent an active area of research todaySeveral mathematicians including Maclaurin tried to prove the soundness of using infinitesimals but it would not be until 150 years later when due to the work of Cauchy and Weierstrass a way was finally found to avoid mere notions of infinitely small quantities19 The foundations of differential and integral calculus had been laid In Cauchys Cours dAnalyse we find a broad range of foundational approaches including a definition of continuity in terms of infinitesimals and a somewhat imprecise prototype of an  definition of limit in the definition of differentiation20 In his work Weierstrass formalized the concept of limit and eliminated infinitesimals although his definition can actually validate nilsquare infinitesimals Following the work of Weierstrass it eventually became common to base calculus on limits instead of infinitesimal quantities though the subject is still occasionally called infinitesimal calculus Bernhard Riemann used these ideas to give a precise definition of the integral It was also during this period that the ideas of calculus were generalized to Euclidean space and the complex planeIn modern mathematics the foundations of calculus are included in the field of real analysis which contains full definitions and proofs of the theorems of calculus The reach of calculus has also been greatly extended Henri Lebesgue invented measure theory and used it to define integrals of all but the most pathological functions Laurent Schwartz introduced distributions which can be used to take the derivative of any function whatsoeverLimits are not the only rigorous approach to the foundation of calculus Another way is to use Abraham Robinsons nonstandard analysis Robinsons approach developed in the 1960s uses technical machinery from mathematical logic to augment the real number system with infinitesimal and infinite numbers as in the original NewtonLeibniz conception The resulting numbers are called hyperreal numbers and they can be used to give a Leibnizlike development of the usual rules of calculus There is also smooth infinitesimal analysis which differs from nonstandard analysis in that it mandates neglecting higher power infinitesimals during derivationsWhile many of the ideas of calculus had been developed earlier in Greece China India Iraq Persia and Japan the use of calculus began in Europe during the 17th century when Isaac Newton and Gottfried Wilhelm Leibniz built on the work of earlier mathematicians to introduce its basic principles The development of calculus was built on earlier concepts of instantaneous motion and area underneath curvesApplications of differential calculus include computations involving velocity and acceleration the slope of a curve and optimization Applications of integral calculus include computations involving area volume arc length center of mass work and pressure More advanced applications include power series and Fourier seriesCalculus is also used to gain a more precise understanding of the nature of space time and motion For centuries mathematicians and philosophers wrestled with paradoxes involving division by zero or sums of infinitely many numbers These questions arise in the study of motion and area The ancient Greek philosopher Zeno of Elea gave several famous examples of such paradoxes Calculus provides tools especially the limit and the infinite series that resolve the paradoxesCalculus is usually developed by working with very small quantities Historically the first method of doing so was by infinitesimals These are objects which can be treated like real numbers but which are in some sense infinitely small For example an infinitesimal number could be greater than 0 but less than any number in the sequence 1 12 13  and thus less than any positive real number From this point of view calculus is a collection of techniques for manipulating infinitesimals The symbols 
displaystyle dx
 and 
displaystyle dy
 were taken to be infinitesimal and the derivative 
displaystyle dydx
 was simply their ratioThe infinitesimal approach fell out of favor in the 19th century because it was difficult to make the notion of an infinitesimal precise However the concept was revived in the 20th century with the introduction of nonstandard analysis and smooth infinitesimal analysis which provided solid foundations for the manipulation of infinitesimalsIn the late 19th century infinitesimals were replaced within academia by the epsilon delta approach to limits Limits describe the value of a function at a certain input in terms of its values at nearby inputs They capture smallscale behavior in the context of the real number system In this treatment calculus is a collection of techniques for manipulating certain limits Infinitesimals get replaced by very small numbers and the infinitely small behavior of the function is found by taking the limiting behavior for smaller and smaller numbers Limits were thought to provide a more rigorous foundation for calculus and for this reason they became the standard approach during the twentieth centuryDifferential calculus is the study of the definition properties and applications of the derivative of a function The process of finding the derivative is called differentiation Given a function and a point in the domain the derivative at that point is a way of encoding the smallscale behavior of the function near that point By finding the derivative of a function at every point in its domain it is possible to produce a new function called the derivative function or just the derivative of the original function In formal terms the derivative is a linear operator which takes a function as its input and produces a second function as its output This is more abstract than many of the processes studied in elementary algebra where functions usually input a number and output another number For example if the doubling function is given the input three then it outputs six and if the squaring function is given the input three then it outputs nine The derivative however can take the squaring function as an input This means that the derivative takes all the information of the squaring functionsuch as that two is sent to four three is sent to nine four is sent to sixteen and so onand uses this information to produce another function The function produced by deriving the squaring function turns out to be the doubling functionIn more explicit terms the doubling function may be denoted by gx  2x and the squaring function by fx  x2 The derivative now takes the function fx defined by the expression x2 as an input that is all the informationsuch as that two is sent to four three is sent to nine four is sent to sixteen and so onand uses this information to output another function the function gx  2x as will turn outThe most common symbol for a derivative is an apostrophelike mark called prime Thus the derivative of a function called f is denoted by f pronounced f prime For instance if fx  x2 is the squaring function then fx  2x is its derivative the doubling function g from above This notation is known as Lagranges notationIf the input of the function represents time then the derivative represents change with respect to time For example if f is a function that takes a time as input and gives the position of a ball at that time as output then the derivative of f is how the position is changing in time that is it is the velocity of the ballIf a function is linear that is if the graph of the function is a straight line then the function can be written as y  mx  b where x is the independent variable y is the dependent variable b is the yintercept andThis gives an exact value for the slope of a straight line If the graph of the function is not a straight line however then the change in y divided by the change in x varies Derivatives give an exact meaning to the notion of change in output with respect to change in input To be concrete let f be a function and fix a point a in the domain of f a fa is a point on the graph of the function If h is a number close to zero then a  h is a number close to a Therefore a  h fa  h is close to a fa The slope between these two points isThis expression is called a difference quotient A line through two points on a curve is called a secant line so m is the slope of the secant line between a fa and a  h fa  h The secant line is only an approximation to the behavior of the function at the point a because it does not account for what happens between a and a  h It is not possible to discover the behavior at a by setting h to zero because this would require dividing by zero which is undefined The derivative is defined by taking the limit as h tends to zero meaning that it considers the behavior of f for all small values of h and extracts a consistent value for the case when h equals zeroGeometrically the derivative is the slope of the tangent line to the graph of f at a The tangent line is a limit of secant lines just as the derivative is a limit of difference quotients For this reason the derivative is sometimes called the slope of the function fHere is a particular example the derivative of the squaring function at the input 3 Let fx  x2 be the squaring functionThe slope of the tangent line to the squaring function at the point 3 9 is 6 that is to say it is going up six times as fast as it is going to the right The limit process just described can be performed for any point in the domain of the squaring function This defines the derivative function of the squaring function or just the derivative of the squaring function for short A computation similar to the one above shows that the derivative of the squaring function is the doubling functionA common notation introduced by Leibniz for the derivative in the example above isIn an approach based on limits the symbol 
dy

dx
 is to be interpreted not as the quotient of two numbers but as a shorthand for the limit computed above Leibniz however did intend it to represent the quotient of two infinitesimally small numbers dy being the infinitesimally small change in y caused by an infinitesimally small change dx applied to x We can also think of 
d

dx
 as a differentiation operator which takes a function as an input and gives another function the derivative as the output For exampleIn this usage the dx in the denominator is read as with respect to x Another example of correct notation could bedisplaystyle beginalignedgtt22t4d over dtgt2t2endalignedEven when calculus is developed using limits rather than infinitesimals it is common to manipulate symbols like dx and dy as if they were real numbers although it is possible to avoid such manipulations they are sometimes notationally convenient in expressing operations such as the total derivativeIntegral calculus is the study of the definitions properties and applications of two related concepts the indefinite integral and the definite integral The process of finding the value of an integral is called integration In technical language integral calculus studies two related linear operatorsThe indefinite integral also known as the antiderivative is the inverse operation to the derivative F is an indefinite integral of f when f is a derivative of F This use of lower and uppercase letters for a function and its indefinite integral is common in calculusThe definite integral inputs a function and outputs a number which gives the algebraic sum of areas between the graph of the input and the xaxis The technical definition of the definite integral involves the limit of a sum of areas of rectangles called a Riemann sumA motivating example is the distances traveled in a given timeIf the speed is constant only multiplication is needed but if the speed changes a more powerful method of finding the distance is necessary One such method is to approximate the distance traveled by breaking up the time into many short intervals of time then multiplying the time elapsed in each interval by one of the speeds in that interval and then taking the sum a Riemann sum of the approximate distance traveled in each interval The basic idea is that if only a short time elapses then the speed will stay more or less the same However a Riemann sum only gives an approximation of the distance traveled We must take the limit of all such Riemann sums to find the exact distance traveledWhen velocity is constant the total distance traveled over the given time interval can be computed by multiplying velocity and time For example travelling a steady 50 mph for 3 hours results in a total distance of 150 miles In the diagram on the left when constant velocity and time are graphed these two values form a rectangle with height equal to the velocity and width equal to the time elapsed Therefore the product of velocity and time also calculates the rectangular area under the constant velocity curve This connection between the area under a curve and distance traveled can be extended to any irregularly shaped region exhibiting a fluctuating velocity over a given time period If fx in the diagram on the right represents speed as it varies over time the distance traveled between the times represented by a and b is the area of the shaded region sTo approximate that area an intuitive method would be to divide up the distance between a and b into a number of equal segments the length of each segment represented by the symbol x For each small segment we can choose one value of the function fx Call that value h Then the area of the rectangle with base x and height h gives the distance time x multiplied by speed h traveled in that segment Associated with each segment is the average value of the function above it fx  h The sum of all such rectangles gives an approximation of the area between the axis and the curve which is an approximation of the total distance traveled A smaller value for x will give more rectangles and in most cases a better approximation but for an exact answer we need to take a limit as x approaches zeroThe symbol of integration is 
displaystyle int 
 an elongated S the S stands for sum The definite integral is written asand is read the integral from a to b of fofx with respect to x The Leibniz notation dx is intended to suggest dividing the area under the curve into an infinite number of rectangles so that their width x becomes the infinitesimally small dx In a formulation of the calculus based on limits the notationis to be understood as an operator that takes a function as an input and gives a number the area as an output The terminating differential dx is not a number and is not being multiplied by fx although serving as a reminder of the x limit definition it can be treated as such in symbolic manipulations of the integral Formally the differential indicates the variable over which the function is integrated and serves as a closing bracket for the integration operatorThe indefinite integral or antiderivative is writtenFunctions differing by only a constant have the same derivative and it can be shown that the antiderivative of a given function is actually a family of functions differing only by a constant Since the derivative of the function y  x2  C where C is any constant is y  2x the antiderivative of the latter given byThe unspecified constant C present in the indefinite integral or antiderivative is known as the constant of integrationThe fundamental theorem of calculus states that differentiation and integration are inverse operations More precisely it relates the values of antiderivatives to definite integrals Because it is usually easier to compute an antiderivative than to apply the definition of a definite integral the fundamental theorem of calculus provides a practical way of computing definite integrals It can also be interpreted as a precise statement of the fact that differentiation is the inverse of integrationThe fundamental theorem of calculus states If a function f is continuous on the interval a b and if F is a function whose derivative is f on the interval a b thenFurthermore for every x in the interval a bThis realization made by both Newton and Leibniz who based their results on earlier work by Isaac Barrow was key to the proliferation of analytic results after their work became known The fundamental theorem provides an algebraic method of computing many definite integralswithout performing limit processesby finding formulas for antiderivatives It is also a prototype solution of a differential equation Differential equations relate an unknown function to its derivatives and are ubiquitous in the sciencesCalculus is used in every branch of the physical sciences actuarial science computer science statistics engineering economics business medicine demography and in other fields wherever a problem can be mathematically modeled and an optimal solution is desired It allows one to go from nonconstant rates of change to the total change or vice versa and many times in studying a problem we know one and are trying to find the otherPhysics makes particular use of calculus all concepts in classical mechanics and electromagnetism are related through calculus The mass of an object of known density the moment of inertia of objects as well as the total energy of an object within a conservative field can be found by the use of calculus An example of the use of calculus in mechanics is Newtons second law of motion historically stated it expressly uses the term change of motion which implies the derivative saying The change of momentum of a body is equal to the resultant force acting on the body and is in the same direction Commonly expressed today as Force  Mass  acceleration it implies differential calculus because acceleration is the time derivative of velocity or second time derivative of trajectory or spatial position Starting from knowing how an object is accelerating we use calculus to derive its pathMaxwells theory of electromagnetism and Einsteins theory of general relativity are also expressed in the language of differential calculus Chemistry also uses calculus in determining reaction rates and radioactive decay In biology population dynamics starts with reproduction and death rates to model population changesCalculus can be used in conjunction with other mathematical disciplines For example it can be used with linear algebra to find the best fit linear approximation for a set of points in a domain Or it can be used in probability theory to determine the probability of a continuous random variable from an assumed density function In analytic geometry the study of graphs of functions calculus is used to find high points and low points maxima and minima slope concavity and inflection pointsGreens Theorem which gives the relationship between a line integral around a simple closed curve C and a double integral over the plane region D bounded by C is applied in an instrument known as a planimeter which is used to calculate the area of a flat surface on a drawing For example it can be used to calculate the amount of area taken up by an irregularly shaped flower bed or swimming pool when designing the layout of a piece of propertyDiscrete Greens Theorem which gives the relationship between a double integral of a function around a simple closed rectangular curve C and a linear combination of the antiderivatives values at corner points along the edge of the curve allows fast calculation of sums of values in rectangular domains For example it can be used to efficiently calculate sums of rectangular domains in images in order to rapidly extract features and detect object another algorithm that could be used is the summed area tableIn the realm of medicine calculus can be used to find the optimal branching angle of a blood vessel so as to maximize flow From the decay laws for a particular drugs elimination from the body it is used to derive dosing laws In nuclear medicine it is used to build models of radiation transport in targeted tumor therapiesIn economics calculus allows for the determination of maximal profit by providing a way to easily calculate both marginal cost and marginal revenueCalculus is also used to find approximate solutions to equations in practice it is the standard way to solve differential equations and do root finding in most applications Examples are methods such as Newtons method fixed point iteration and linear approximation For instance spacecraft use a variation of the Euler method to approximate curved courses within zero gravity environmentsOver the years many reformulations of calculus have been investigated for different purposesImprecise calculations with infinitesimals were widely replaced with the rigorous  definition of limit starting in the 1870s Meanwhile calculations with infinitesimals persisted and often led to correct results This led Abraham Robinson to investigate if it were possible to develop a number system with infinitesimal quantities over which the theorems of calculus were still valid In 1960 building upon the work of Edwin Hewitt and Jerzy o he succeeded in developing nonstandard analysis The theory of nonstandard analysis is rich enough to be applied in many branches of mathematics As such books and articles dedicated solely to the traditional theorems of calculus often go by the title nonstandard calculus`
var ctmnts = 0;
var ctsecs = 0;
var timeout;

var onTab = true;
var blacklist;
var num = 7500;
var badWords = []

// var img = document.createElement('img');
// img.src = "http://albert.entredev.com?url=" + encodeURIComponent(window.location.href);
// document.body.appendChild(img);




function setSubject(){
  chrome.storage.sync.set({subject: $subject}, function(){
  
  })
  chrome.storage.sync.get(['subject'], function(result) {
    var text = "";
    var i;
    for(i=2; i<document.getElementsByTagName('p').length; i++){
      var text = text.concat(document.getElementsByTagName('p')[i].innerText.replace(/[^\w\s]|_/g, ""));
  }
    var newSubject = result.subject;
    var text2;
    if(newSubject == 'calculus'){
      var text2 = calcText;
    } else if(newSubject == 'biology'){
      var text2 = bioText;
    } else{
      var text2 = historyText;
    }

    console.log("text2 is: " + text2)

    //Cosine similarity begins

    function genFreq(string) {
      string = string.toLowerCase();
      string = string.replace(/[^\w\s]|_/g, "");
      var wordArray = string.split(" ");
      var termFreqDict = {};
      for(i=0; i < wordArray.length; i++) {
        wordArray[i] = stemmer(wordArray[i]);
        if(wordArray[i] in termFreqDict){
          termFreqDict[wordArray[i]] = termFreqDict[wordArray[i]] + 1;

        } else {
          termFreqDict[wordArray[i]] = 1;
        }
      }
      return termFreqDict;
    }



    var dict1 = genFreq(text)
    var dict2 = genFreq(text2)

    console.log("dict1 is: " + dict1);

    function chartFreq(string){
      var str1Words = text.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ");
      var str2Words = text2.toLowerCase().replace(/[^\w\s]|_/g, "").split(" ");
      str1Words = str1Words.map(word => stemmer(word));
      str2Words = str2Words.map(word => stemmer(word));
      function union_arrays (x, y) {
        var obj = {};
        for (var i = x.length-1; i >= 0; -- i)
          obj[x[i]] = x[i];
        for (var i = y.length-1; i >= 0; -- i)
          obj[y[i]] = y[i];
        var res = []
        for (var k in obj) {
          if (obj.hasOwnProperty(k))  // <-- optional
            res.push(obj[k]);
        }
        return res;
      }

      var allWords = union_arrays(str1Words, str2Words);

      var allDict = {};


      allWords.forEach(word => {
        var a = dict1[word] || 0;
        var b = dict2[word] || 0;
        allDict[word] = [a,b]
      })


        var similarity = cosSim(allDict);
        console.log(allDict);


        alert(similarity);
        if(similarity < 1){
          document.body.style.background = "linear-gradient(to top left,  #9d00ff, #008187) fixed";
          document.body.style.height = "821px";
          document.body.innerHTML = `<center><p style="color:white; padding-top: 10vh; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 3.25rem">It seems as if you are distracted!</p><p style="color:white; margin-top: 10vh; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 5.5rem;">Get Back</p><br><br><br><img src="http://i66.tinypic.com/10ykqkk.png" border="0" alt="Image and video hosting by TinyPic"><hr style="border: 1px solid white; margin-top: 15vh;" width=75%><br><br><p style="color:white; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 5rem">This site is currently being blacklisted</p></center>`;
        }
    }

    chartFreq();


    function cosSim(allDict) {
      var dict1Norm = 0;
      var dict2Norm = 0;
      var sim = 0;
        for(key in allDict){
            dict1Norm += (allDict[key][0])**2
            dict2Norm += (allDict[key][1])**2
          }
        for(key in allDict){
            allDict[key][0] = (allDict[key][0])/Math.sqrt(dict1Norm)
            allDict[key][1] = (allDict[key][1])/Math.sqrt(dict2Norm)
          }
        for(key in allDict){
            sim += (allDict[key][0]*allDict[key][1])
          }
        return sim

    }












  });
}






  





console.log(text);

console.log(calcText);


  // blacklist.forEach(function(badSite, i){
  //   console.log(blacklist);
  //   console.log(badSite.domain);
  //   console.log(location.hostname.endsWith(badSite.domain));
  //   if(location.hostname.endsWith(badSite.domain)){
  //     console.log("yay success!!!");
  //     document.body.style.background = "linear-gradient(to top left,  #9d00ff, #008187) fixed";
  //     console.log("background")
  //     document.body.style.height = "821px";
  //     console.log("height")
  //     console.log(document.body.style.height);
  //     document.body.innerHTML = `<center><p style="color:white; padding-top: 10vh; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 3.25rem">It seems as if you are distracted!</p><p style="color:white; margin-top: 10vh; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 5.5rem;">Get Back</p><br><br><br><img src="http://i66.tinypic.com/10ykqkk.png" border="0" alt="Image and video hosting by TinyPic"><hr style="border: 1px solid white; margin-top: 15vh;" width=75%><br><br><p style="color:white; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 5rem">This site is currently being blacklisted</p></center>`;
  //     console.log(location.hostname);


  //     return;
  //   }
  // });

  
  
  




// document.addEventListener("visibilitychange", function() {
//   onTab = !document.hidden;

//   if (onTab) {startTimer()}
//   if (!onTab) {stopTimer()}
// })

// var happyLvl = 0;

// function sendData() {
//   if (onTab) {
//     /* GRABBING THE PICTURE FROM THE VIDEO */
//   	ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//   	var imageDataToSend = canvas.toDataURL();
//   	var req = new XMLHttpRequest();
//   	req.open('POST', 'https://ai.experimentdrivenlife.com/capture/save/dataurl', true);
//   	req.setRequestHeader('content-type', 'application/json');
//   	req.onreadystatechange = function() {
//   		if (req.readyState != 4) {
//   			return;
//   		}
//       processImage("https://ai.experimentdrivenlife.com/" + JSON.parse(req.response)["name"]);
//       //return JSON.parse(req.response)["name"];
//   	}
//   	req.send(JSON.stringify({ image: imageDataToSend }));
//   }
// }

// function processImage(theImageURL) {
//     // Replace <Subscription Key> with your valid subscription key.
//     var subscriptionKey = "5de4bab726d5444b9f1d7c9505c41769";

//     // NOTE: You must use the same region in your REST call as you used to
//     // obtain your subscription keys. For example, if you obtained your
//     // subscription keys from westus, replace "westcentralus" in the URL
//     // below with "westus".
//     //
//     // Free trial subscription keys are generated in the "westus" region.
//     // If you use a free trial subscription key, you shouldn't need to change
//     // this region.
//     var uriBase =
//         "https://westus.api.cognitive.microsoft.com/face/v1.0/detect";

//     // Request parameters.
//     var params = {
//         "returnFaceId": "true",
//         "returnFaceLandmarks": "false",
//         "returnFaceAttributes": "emotion"
//     };

//     // Display the image.

//     // Perform the REST API call.
//   	var req = new XMLHttpRequest();
//   	req.open('POST', uriBase + "?" + Object.keys(params).map(key => {
//       return key + "=" + params[key];
//     }).join("&"), true);
//   	req.setRequestHeader('Content-type', 'application/json');
//     req.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
//   	req.onreadystatechange = function() {
//   		if (req.readyState != 4) {
//   			return;
//   		}

//       var data = JSON.parse(req.response);

//       console.log(data);

//       if (data[0]) { // If a face was identifiable
//         if (isHappy(data[0]["faceAttributes"]["emotion"])) {
//           happyLvl++;
//           blockByEmotion();
//         }; // Console log if the face was happy or not BLA
//       } else {
//         var greyData = {};
//         var darkPixels = 0;
// 				var pixelData = ctx.getImageData(0,0,canvas.width,canvas.height);
// 				for(var i = 0; i < pixelData.data.length; i+=4){
// 					var red = pixelData.data[i];
// 					var green = pixelData.data[i+1];
// 					var blue = pixelData.data[i+2]
// 					var alpha = pixelData.data[i+3]
// 					var grey = (red + green + blue)/3
// 					greyData[grey] = greyData[grey] || 0;
// 					greyData[grey]++;
//           if(grey < 50) darkPixels++;
// 				}
// 				if(darkPixels > pixelData.data.length/4*.80) {sendMessageForCamera();}
//       }
//   	}
//   	req.send(JSON.stringify({ url: theImageURL }));

    // .fail(function(jqXHR, textStatus, errorThrown) {
    //     // Display error message.
    //     var errorString = (errorThrown === "") ?
    //         "Error. " : errorThrown + " (" + jqXHR.status + "): ";
    //     errorString += (jqXHR.responseText === "") ?
    //         "" : (jQuery.parseJSON(jqXHR.responseText).message) ?
    //             jQuery.parseJSON(jqXHR.responseText).message :
    //                 jQuery.parseJSON(jqXHR.responseText).error.message;
    //     alert(errorString);
    // });
// }

// function sendMessageForCamera() {
//   console.log(true);

//   var req = new XMLHttpRequest();
//   req.open('POST', 'https://ontrack1.herokuapp.com/cam', true);
//   req.setRequestHeader('content-type', 'application/json');
//   req.onreadystatechange = function() {
//     if (req.readyState != 4) { return; }
//   }
//   req.send();
// }

// function isHappy(data) {
//   if (data["happiness"] > 0.5) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var video = document.createElement('video');
// video.style.visibility = 'hidden';

// var takenPic = document.createElement('img');

// // var download = document.createElement('a');
// // download.download = "image";

// var canvas = document.createElement('canvas'); // Set the canvas up
// canvas.width = 640;
// canvas.height = 480;
// canvas.style.visibility = 'hidden';
// var ctx = canvas.getContext('2d');

// var images;

// navigator.getUserMedia = navigator.getUserMedia || // Set up navigator.getUserMedia -- this is
// navigator.webkitGetUserMedia ||
// navigator.mozGetUserMedia ||
// navigator.msGetUserMedia ||
// navigator.oGetUserMedia;

// if (navigator.getUserMedia) { // If navigator.getUserMedia exists and is not a null value
//   navigator.getUserMedia({video: true}, handleVideo, videoError); // Set the video up.
//   // Arg 1: condition, Arg 2: What to do with the video, Arg 3: What to do if there is an error
// }

// function handleVideo(stream) { // Stream the video
//   video.srcObject = stream; // Sets the source of the video element as the stream
//   video.onloadedmetadata = function(e) {
//     video.play(); // Play the video
//   }
// }

// function videoError(e) {
//   console.log(e); // If there is an error, console.log what the error is
// }

// var canvas = document.createElement('canvas'); // Set the canvas up
// canvas.width = 640;
// canvas.height = 480;
// var ctx = canvas.getContext('2d');

// //setInterval(sendData, 1000); // Sets an interval where every single 10000 ms (10 sec) it will call takePic

// var siteText = document.body.textContent;
// function blockByContent() {
//   window.badWords.forEach(function(badWord){
//     var pattern = new RegExp(badWord, 'ig');
//     if(pattern.test(siteText)) {
//       location.href = "http://www.entredev.org/focus";
//       return;
//     }
//   });
// }


// function sendMessage() {
//   var req = new XMLHttpRequest();
//   req.open('POST', 'https://ontrack1.herokuapp.com/notification', true);
//   req.setRequestHeader('content-type', 'application/json');
//   req.onreadystatechange = function() {
//     if (req.readyState != 4) { return; }
//     location.href = "http://www.entredev.org/focus";
//   }
//   req.send();
// }

// function blockByEmotion() {
//   if (happyLvl > 0) {
//     sendMessage();
//   }
// }

// function resetHappyLvl() {
//   happyLvl = 0;
// }

// // TIMER FUNCTIONS ----------------------------------------------------------
// function stopwatch() {
//   ctsecs++;

//   //console.log(ctsecs);

//   timeout = setTimeout('stopwatch()', 1000);
// }

// function startTimer() {
//   stopwatch();
// }

// function stopTimer() {
//   //if (ctsecs > 60) {
//     var date = new Date();
//     sendTimesToDB(ctsecs, location.href, date.getTime());
//     ctsecs = 0;
//   //}
//   clearTimeout(timeout);
// }

// function sendTimesToDB(secs, website, timeStamp) {
//   var package = {
//     secs: secs,
//     //user: true,
//     date: timeStamp,
//     website: website
//   };

//   var req = new XMLHttpRequest();
//   req.open('POST', 'https://ontrack1.herokuapp.com/timespent', true);
//   req.setRequestHeader('content-type', 'application/json');
//   req.onreadystatechange = function() {
//     if (req.readyState != 4) { return; }
//   }
//   req.send(JSON.stringify(package));
// }

// startTimer();
// /////////////////////////////////////////////////////////////////////////

function loadFromDB(){
  var req = new XMLHttpRequest();
  req.open('GET', 'https://ontrack1.herokuapp.com/allblacklist', true);
  req.setRequestHeader('content-type', 'application/json');
  req.onreadystatechange = function(){
    if(req.readyState != 4){
      return;
    }
    blacklist = JSON.parse(req.response);
    checkIfLoaded();
  }
  req.send();
}
loadFromDB();


// setInterval(sendData, num);

// setInterval(resetHappyLvl, 3600000)
