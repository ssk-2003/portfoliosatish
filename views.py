from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages

def UserLoginCheck(request):
    if request.method == 'POST':
        loginname = request.POST.get('loginname')
        pswd = request.POST.get('pswd')
        
        user = authenticate(request, username=loginname, password=pswd)
        
        if user is not None:
            login(request, user)
            return redirect('home')  # Redirect to your portfolio home page
        else:
            messages.info(request, 'Invalid credentials')
    
    return render(request, 'login.html')
