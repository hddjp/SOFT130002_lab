# lab5����ĵ�
![Github��ͼ](GitHub��ͼ.png)  
![��ҳ��ͼ](��ҳ��ͼ.png)  
***
��һ������Ŀ�����������ַ�����Ѱ��ƥ���ʽΪ��?name=...����&name=...���Ĳ��֣�������֮������ݣ�ֱ��&���߽���Ϊֹ����Ϊname�Ĳ���ֵ�����  
����������ַ����ֳ�һ��һ����ĸ�����У�Ȼ����forѭ������ƥ�䣬Ѱ���ַ�����&���ٿ��Ƿ��������������ַ����滹�еĸ�������5���Լ������Ƿ��ǡ�name=������ƥ��ɹ����������ַ����������&�򵽽�β��  
```function showWindowHref(){
    let result="";
    let arr=url.value.split("");
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="?"||arr[i]=="&"){
            if(arr.length>i+6){
                var attr=arr[i+1]+arr[i+2]+arr[i+3]+arr[i+4]+arr[i+5];
                if(attr=="name="){
                    var len=arr.length-i-6;
                    for(let k=i+6;k<arr.length;k++){
                        if(arr[k]=="&"){
                            len=k-i-6;
                        }
                    }
                    for(let j=0;j<len;j++){
                        result +=arr[i+6+j];
                    }
                }
            }
        }   
    }   
    url_result.value=result;
}
```
***
�ڶ�������ʹ����setTimeout������  
������window.onload���������Ǿ�����timeTest�� 
timeTest���Ȼ�ȡ���ڵ��������ٰѣ�60-������/5ȡ����Ϊ�仯�����������������10��ֻ����10�Ρ�  
��ʱ�䷭һ����forѭ�����ti(a)����ʵ�֣����е�aÿ��һ��ѭ����һ��setTimeout�����������ֱ�Ϊfunction(){mul.value*=2;}��5000*a�� 
```let mul = document.getElementById("mul");
window.onload=function(){
    mul.value=1;
    this.timeTest();
}
function timeTest(){
    let time=new Date();
    second=time.getSeconds();
    let number=parseInt((60-second)/5);
    if(number>10){
        number=10;
    }
    for(let i=0;i<number;i++){
        ti(i+1);
    }
}
function ti(a){
     setTimeout(function(){
        mul.value *=2;
     },5000*a);
}
```
***
����������ʹ��������� 
��arrSameStr�д���class character��������һ�����캯����һ�����Ӵ���������һ���������һ���ַ�������char�������ַ����ƣ�����timeΪ���ַ����ִ����� 
֮���ö�������charArray���������еõ��Ķ���ʵ���� 
��������ַ�ת��Ϊ���飬Ȼ����������е�Ԫ�أ���Ԫ�������еĶ���ʵ���Աȣ������ͬһ���ַ��������һ�������ͬ���ù��캯��������ַ��½�Ϊһ��ʵ��charArray[charArray.length]  
����������������ÿһ����Ա��ȡ�������͸ô������ַ����  
```function arrSameStr(){
    let index;
    let max=0;
    class character{
        constructor(char){
            this.char=char;
            this.time=1;
        }
        add(){
            this.time++;   
        }
    }
    let arr=most.value.split("");
    let charArray=new Array();
    for(let i=0;i<arr.length;i++){
        let repeat=false;
        q:for(let j=0;j<charArray.length;j++){
            if(arr[i]==charArray[j].char){
                charArray[j].add();
                repeat=true;
                break q;
            }
        }
        if(!repeat){
            charArray[charArray.length]=new character(arr[i]);
        }
    }
    for(let i=0;i<charArray.length;i++){
        if(charArray[i].time>max){
            max=charArray[i].time;
            index=charArray[i].char;
        }
    }
    result.value="The most character is:"+index+" times:"+max;
}
```
 
