#include <iostream>
#include <queue>
using namespace std;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(NULL);
	cout.tie(NULL);
	int num;
	cin>>num;
	queue<int> st;
	for(int i=1;i<=num;i++)
	{
		string s;
		cin>>s;
		if(s=="push")
		{
			int tmp;
			cin>>tmp;
			st.push(tmp);
		}
		else if(s=="pop")
		{
			if(!st.empty())
			{
			int tmp=st.front();
			st.pop()
;			cout<<tmp<<"\n";
			}
			else
			cout<<-1<<"\n";
		}
		else if(s=="size")
		{
			cout<<st.size()<<"\n";
		}
		else if(s=="empty")
		{
			if(!st.empty())
			cout<<0<<"\n";
			else
			cout<<1<<"\n";
		}
		else if(s=="front")
		{
			if(!st.empty())
			cout<<st.front()<<"\n";
			else
			cout<<-1<<"\n";
		}
		else if(s=="back")
		{
			if(!st.empty())
			cout<<st.back()<<"\n";
			else
			cout<<-1<<"\n";	
		}
	}
}