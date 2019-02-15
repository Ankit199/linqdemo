import { Http } from '@angular/http';
import { List, Enumerable } from 'linqts';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
@IonicPage()
@Component({
  selector: 'page-requiredinfo',
  templateUrl: 'requiredinfo.html',
})
export class RequiredinfoPage {
  datewisedata:any=[];
  info = {
    title: 'Chat Info',
    usemsg: '',
    group: [],
    groupcreatedday:'',
    userlist: [],
    mostmessager:{},
    leastmesseager:{},
    usermsgcount: [],
    totalmsg: '',
    totaluser: '',
    mostmessagerOfday:{},
    totalletter:'',
    totalwords:'',
    mediacount:0,
    usermedia:'',
    mostmediabyuser:'',
    mostmsgdate:'',
    leastmsgdate:'',
    datewisemsgcount:[],
    datewiseusermessage:[],
    mostwordused:[]
  }
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getLocalData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequiredinfoPage');
  }
  getLocalData() {
    this.http.get('../../assets/chat/chat.txt').map(res => res.text()).subscribe(data => {
      let datas: any = [];
      let getrowfromstring: any = data.split('\n');

      getrowfromstring.forEach(element => {
        let getdatefromrow = element.split('-');
        let dateflow=getdatefromrow[0].split(',');
        if (getdatefromrow[1] !== undefined) {
          let splituser_msg = getdatefromrow[1].split(':');
          let db = { date: getdatefromrow[0], user: splituser_msg[0], message: splituser_msg[1] };
          let dbdate= { date: dateflow[0],time:dateflow[1], user: splituser_msg[0], message: splituser_msg[1] };
          this.datewisedata.push(dbdate);
          datas.push(db);
        }

      });
      let db: any = datas.filter(x => x.message !== undefined);
      this.datewisedata= this.datewisedata.filter(x => x.message !== undefined)
   //   console.table(this.datewisedata);
      // console.table(db);
      this.info.group = db;
      let leastdate= new List<any>(db).OrderBy(x=>x.date).First();
      // console.table(leastdate);
      var date1 = new Date(leastdate.date);
var date2 = new Date();
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))+1; 
this.info.groupcreatedday=diffDays.toString();
this.getmessagecount(db);
    });
  }
  getmessagecount = (db: any) => {

    let groups = new List<group>(db);
    let groupsdate = new List<group>( this.datewisedata);
    //  this.datewisedata
    let userlist:any = groups.Select(x => x.user).Distinct().ToArray();
    this.info.userlist=userlist; 
    let count = groups.Select(x => x.user).Distinct().Count();    
    let users = groups.Select(x => x.user).Distinct().ToArray();
    let msgcount = groups.Select(x => x.message).Count();
    this.info.totaluser = `Total user in group ${count}`;
    this.info.totalmsg = `Total  messages are ${msgcount} `;
    // console.log(`total count of message in group ${msgcount}`);
    
    let msgflow: any = groups.GroupBy(y => y.user, x => x.message);
    let msgflowbydate: any = groupsdate.GroupBy(y => y.date, x => x.message);
    let msgflowbydateuser: any = groupsdate.GroupBy(y => y.date,x=>x);
   // debugger;
//console.log('userwisemsg'+msgflowbydateuser.toString());
    /** print chart Data  */
    this.generategroupchartdata(msgflow);
    this.generategroupchartdatabydate(msgflowbydate);
    this.generateuserdatabydate(msgflowbydateuser);
   //
    /** print chart data end  */
  }
  generategroupchartdata(db: any) {
    debugger;
    let Groupcircle: any = [];
    let Groupcirclemedia :any=[];
    let stringlength:any='';
    let meadia:any=0;
    for (var key in db) {
      if (db.hasOwnProperty(key)) {
        var s = '';
        for (let ss in db[key]) {
          s += db[key][ss];
         meadia= s.split( new RegExp( "<Media omitted>", "gi" ) ).length-1;
          stringlength+=db[key][ss];
        }
        let info = { user: key, totalmsg: db[key].length, msgstring: s }
        let meadiainfo={ user: key, totalmsg: db[key].length, msgstring: meadia }
        Groupcircle.push(info);
        Groupcirclemedia.push(meadiainfo);
     
      }
      
    
    }
    //  word count success debugger;
    let dbs:any = this.removeWord(stringlength,'<Media omitted>');//stringlength.replace(/<Media omitted>/g,' ');
    let a:any =this.nthMostCommon(dbs,6);
    
    let emojicount=this.fancyCount(stringlength);
    console.log('total emoji'+emojicount);
      this.info.totalletter=stringlength.length;      
      this.info.totalwords=this.countWords(stringlength);
      this.info.mediacount=stringlength.split( new RegExp( "<Media omitted>", "gi" ) ).length-1;
    //  console.log('total words'+ this.info.totalwords);   
        this.info.usermsgcount = Groupcircle;
        this.info.usermedia=Groupcirclemedia;
        let mostmediabyuser:any = new List<any>( Groupcirclemedia).OrderByDescending(x=>x.msgstring).First();
        this.info.mostmediabyuser=mostmediabyuser.user;
      //  console.table('mostmediabyuser'+mostmediabyuser.user);
    let mostmessager = new List<any>(Groupcircle).OrderByDescending(x=>x.totalmsg).First();
    let leastmessager = new List<any>(Groupcircle).OrderByDescending(x=>x.totalmsg).Last();
    this.info.mostmessager=mostmessager;
    this.info.leastmesseager=leastmessager;
    // this.generategroupchartdatabydate(usermedia);

  }
 removeWord = (a:any,searchWord)=>{
    var str = a;
    var n = str.search(searchWord);
    while(str.search(searchWord) > -1){
        n = str.search(searchWord);
        str = str.substring(0, n) + str.substring(n + searchWord.length, str.length);
    }
    return str;
}
  generategroupchartdatabydate(db:any){
    let Groupcircle: any = [];    
    for (var key in db) {
      if (db.hasOwnProperty(key)) {       
        let info = { date: key, totalmsg: db[key].length }     
        Groupcircle.push(info);
      }
  }
 
  
  new List<any>(Groupcircle).OrderBy(x=>new Date(x.date.toString('dd-MMM-yyyy')));
  
 
  this.info.datewisemsgcount=Groupcircle;
 // console.table(this.info.datewisemsgcount);
  let mostmessagerdate = new List<any>(Groupcircle).OrderBy(x=>new Date(x.date.toString('dd-MMM-yyyy'))).OrderByDescending(x=>x.totalmsg).First();
  let leastmessagerdate = new List<any>(Groupcircle).OrderBy(x=>new Date(x.date.toString('dd-MMM-yyyy'))).OrderByDescending(x=>x.totalmsg).Last();
  this.info.mostmsgdate=mostmessagerdate;
 this.info.leastmsgdate=leastmessagerdate;
}
generateuserdatabydate(db:any){
  let Groupcircle: any = [];    
  for (var key in db) {
   
    if (db.hasOwnProperty(key)) {      
      let userinfodate=new List<any>(db[key]).GroupBy(y => y.user,x=>x.message); 
      for (var keys in userinfodate) {
        if (userinfodate.hasOwnProperty(keys)) {
        let info = { date: key, user:keys,totalmesage:userinfodate[keys].length }     
        Groupcircle.push(info);
        }
      }
     
    }
    this.info.datewiseusermessage=Groupcircle;
  //  console.table(Groupcircle);
}
}

  countWords=(s)=>{
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function(str){return str!="";}).length;
    
}
 fancyCount(str){
  return /[^\u0000-\u00ff]/.test(str);
 // return Array.from(str.split(/[\ufe00-\ufe0f]/).join("")).length;
}
  /** find most  common world used Begin */
  nthMostCommon(string, ammount) {
    var wordsArray = string.split(/\s/);
    var wordOccurrences = {}
    for (var i = 0; i < wordsArray.length; i++) {
      wordOccurrences['_' + wordsArray[i]] = (wordOccurrences['_' + wordsArray[i]] || 0) + 1;
    }
    var result = Object.keys(wordOccurrences).reduce(function (acc, currentKey) {
      /* you may want to include a binary search here */
      for (var i = 0; i < ammount; i++) {
        if (!acc[i]) {
          acc[i] = { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] };
          break;
        } else if (acc[i].occurences < wordOccurrences[currentKey]) {
          acc.splice(i, 0, { word: currentKey.slice(1, currentKey.length), occurences: wordOccurrences[currentKey] });
          if (acc.length > ammount)
            acc.pop();
          break;
        }
      }
      return acc;
    }, []);
    return result;
  }
  /** find most common world used END */
  //Accordine Open
  ngOnInit() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }
  //Accordine End

}
interface group {
  date: string,
  user: string,
  message: string
}


