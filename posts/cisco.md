The Cisco University Challenge is an amalgamation of a hackathon and a businessathon(?). Take Computer Science and Business students, place them in a room with UK business leaders and a worrying amount of caffeing, see what happens. 

Starting the competition, we were presented with a series of four briefs, our team choosing Barclays' brief of "Controlling access to a users private data in the internet of things".

Borrowing from the Bitcoin architecture we formed 'PermissionCloud', a user centric IOT permissions management system. The premise is based around the following key components:

> **Device Administrators**
> 
> These are the manufacturers and developers of the IOT device in question, for example: **Nest** and their 'smart' thermostat system.
> 
> **Data Providers**
> 
> This is a source of a users personal data, for example: Android or IOS could provide a users GPS location.
> 
> **Permission Cloud**
> 
> This is a de-centralised server that stores tokens for specific endpoints provided by the **device administrators** and **data providers**.
> 
> **BlockChain**
> 
> This is a distributed backup of the state of the Permission Cloud at specific times. This means if anyone was to somehow gain unauthorised access to the Permission Cloud and change any users settings, this could be detected due to a discontinuity between the permissions and those stored in the BlockChain. 
> 
> **User**
> 
> This is the person actually using the system, be it through a mobile application, web app or any other implementation. Users have the ability to create new rules, think IFTTT, and at any time can invalidate the tokens used by these rules, hence revoking access to their data.

We are essentially making all IOT devices slaves to their respective owners and device administrators. Far removed from the idea of a smart fridge botnet, devices using our system could not actually access any data directly. This would actually be acheived by the device administrators requesting permission from the user, the user granting permission and authenticating with the device administrator and data provider, OAuth tokens from both providers being stored in a 'rule entry' in the Permission Cloud and then the device administrator being able to request data directly from the data provider using their OAuth token. 

In summary, IOT devices need not apply (for a users data) and are in the hands of the user rather than the other way around.

