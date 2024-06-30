from django.shortcuts import render, redirect, get_object_or_404
from .forms import ProductoForm
from .models import Producto

from django.shortcuts import redirect
from django.views.decorators.http import require_POST
from .models import Producto

@require_POST
def producto_add(request):
    nombre = request.POST.get('nombre')
    descripcion = request.POST.get('descripcion')
    precio = request.POST.get('precio')
    nuevo_producto = Producto(nombre=nombre, descripcion=descripcion, precio=precio)
    nuevo_producto.save()
    return redirect('producto_list')


def producto_list(request):
    productos = Producto.objects.all()
    return render(request, 'producto_list.html', {'productos': productos})

def producto_edit(request, pk):
    producto = get_object_or_404(Producto, pk=pk)
    if request.method == "POST":
        form = ProductoForm(request.POST, instance=producto)
        if form.is_valid():
            form.save()
            return redirect('producto_list')
    else:
        form = ProductoForm(instance=producto)
    return render(request, 'producto_edit.html', {'form': form})

def producto_delete(request, id):
    producto = get_object_or_404(Producto, id=id)
    producto.delete()
    return redirect('producto_list')

def lista_productos(request):
    productos = Producto.objects.all()  
    return render(request, 'producto_list.html', {'productos': productos})
def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos.html', {'productos': productos})

def login_view(request):
    return render(request, 'login.html')

def index(request):
    return render(request, 'index.html')