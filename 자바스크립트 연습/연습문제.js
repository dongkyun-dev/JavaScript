<script>
    function TestScore(name, kor, eng) {
        this.userName=name;
        this.korNum=kor;
        this.engNum=eng;

        this.getTestInfo=function(){
            document.write("이름:"+this.userName,"<br>");
            document.write("국어:"+this.korNum,"<br>");
            document.write("영어:"+this.engNum,"<br>");
            }
        this.getAvg=function(){
            return (this.korNum+this.engNum)/2;
        }
    }
    var kimgun = new TestScore("김군",80,90);
    var ohgun = new TestScore("오군",100,80);

    kimgun.getTestInfo();
    document.write("평균 점수:"+kimgun.getAvg(),"<br><br>");
    
</script>