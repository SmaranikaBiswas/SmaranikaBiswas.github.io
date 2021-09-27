var names=new Array();
names[0]="Yadav";
names[1]="Jonny";
names[2]="jay";
names[3]="Freddy";
names[4]="Rose";
names[5]="Benny";
names[6]="Jen";
names[7]="jim";

for (var i = 0; i < names.length; i++)
{
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j')
	{
		console.log("Goodbye "+names[i]);
	}
	else
	{
		console.log("Hello "+names[i]);
	}
}