

<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->
<div align="center">

# File-Auth

Codepeak 2021 Open source 
<p align="center">
    <a href="https://www.codepeak.tech/">
      <img src="https://img.shields.io/badge/Codepeak-2021-blue" />
    </a>
    <a href="https://github.com/RupakBiswas-2304/File_authentication/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/RupakBiswas-2304/File_authentication?color=0088ff" />
    </a>
    <a href="https://github.com/RupakBiswas-2304/File_authentication/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/RupakBiswas-2304/File_authentication?color=0088ff" />
    </a>
  </p>
  <br/>
<!-- [![codepeak](https://img.shields.io/badge/Codepeak-2021-blue)](https://www.codepeak.tech/) -->

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <br/>
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)
[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/File_authentication)
<br/>
A secure-authentication system which verifies users by verifying an uploaded file.

</div>


<div >
  <div align="left">Link of Figma design for SignIn-SignUp page : 
  <a href="https://www.figma.com/file/GZN1Riyavg69vflQ9XKz0S/codepeak?node-id=41%3A43"> @Figma </a> </div>
  <div> Credit : <a href="https://www.github.com/riyajha2305"> @riyajha2305</a><div>
</div>

### Advantages

- Hard/near-impossible to bruteforce.
- No need to remember password.
- Even if somebody sees your file they can't get access to the account.
- Storage space doesn't depend on the file size.
- Reduces working time & increases productivity.
- Credentials accessible anytime & anywhere with just few clicks.
- Easy to understand and use for beginners.
- Highly accessible with low skill gap.

### Disadvantages

- If the key-file is large it would take much time to verify.
- If user shares their file publicly it would be a risk.
- If someone's computer is infected then it may be risky to keep key files open because there are malwares which take user's position coordinates from IP, copy hardware ID, copy the key file and send it to the hacker and hacker can easily get access user's account. In this case two factor authentication(2FA) also has no role to save user's account.
- If key file is lost during formatting device or some other issue the account will be locked forever if 2FA is absent.
- If it is a online system then internet problems can reduce productivity.
- If someone is using this service from a remote server the session can be hijacked and control of account can be taken by hacker.
- Cannot be used in public servers like airports/railways since it poses humongous threat on the file integrity and could lead to a breach of security.

# Contributing :

Contributions are always welcome!

### Codepeak-2021 scoring criteria : 
- For merging easy issue assign 5 points.
- For merging MED issue assign 10 points.
- For merging hard issue assign 20 points.
- For merging 1-point issue assign 1 points.
- For pointing a new easy issue assigne 1 point
- For pointing a new MED/HARD issue assigne 1 point

### Getting started : 

- [ step 1 ] 

  Fork the repo, give a star also😉, git clone the repo --

  ```bash 

    git clone https://github.com/RupakBiswas-2304/File_authentication.git

  ```
- [ step 2]

  cd into the main directory , next create a virtual environment using the folowing command 
  if you are using multiple version of python, use python3.7 

  ```bash 
    python -m venv venv
  ```
  after successfull creation of virtual environment , activate the environment by executing the activate file in venv/scripts/

- [ step 3 ]

  install requied python modules -

  ```bash 
    pip install -r requirment.txt
  ```

- [ step 4 ]

  open your mysql server , and create a new database and update the settings.py in the auth folder
  ```bash
    DATABASES = {
      'default': {
          'ENGINE': 'django.db.backends.mysql',
          'NAME': 'YOUR DATABASE NAME',
          'USER': 'ADD YOUR USER NAME HERE',
          'PASSWORD': 'ADD YOUR PASSWORD HERE',
          'HOST':'127.0.0.1',
          'PORT':'3306',
      }
    }
  ```
- [ step 5 ]
  open terminal and start the server : 
  (make sure your virtual environment is active)

  ```bash 
    python manage.py migrate
  ```
  ```bash 
    python manage.py runserver
  ```
- [ step 6 ]
  use postman to test apis
- [ step 7 ]
    Now read the full documentation of the API to start developing. [Link to API Documentation](https://github.com/RupakBiswas-2304/File_authentication/blob/main/Api-doc.md)

    
#
    

## Getting Started with Create React App

[Read here](https://github.com/RupakBiswas-2304/File_authentication/blob/main/react.md)

    
## Authors

- [@Rupak](https://www.github.com/RupakBiswas-2304)
- Pushkar Verma [@pushkar2112](https://www.github.com/pushkar2112)
- Padmaja [@padmaja](https://github.com/padmaja2305)
- Anurag Ravi [@Anurag-ravi](https://github.com/Anurag-ravi)

- [make atleast 15 points worth contribution and add your name here]
