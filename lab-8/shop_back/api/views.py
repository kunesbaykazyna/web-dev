from .models import Product, Category
from django.http import JsonResponse

def product_list(request):
    pr = Product.objects.all()
    data = []
    for p in pr:
        data.append({
            'id': p.id,
            'name':p.name,
            'price':p.price,
            'description': p.description,
            'count':p.count,
            'is_active':p.is_active,
            'category':p.category.id 
            })
        
    return JsonResponse(data, safe=False)

def product_det(request, id):
    try:
        pr = Product.objects.get(id=id)
        data = {
            'id':pr.id,
            'name':pr.name,
            'price':pr.price,
            'description': pr.description,
            'count':pr.count,
            'is_active':pr.is_active,
            'category':pr.category.id 
            }
        return JsonResponse(data)
    except  Product.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def category_list(request):
    ct = Category.objects.all()
    data = []
    for c in ct:
        data.append({
            'id':c.id,
            'name':c.name
        })
    return JsonResponse(data, safe=False)

def category_det(request, id):
    try:
        ct = Category.objects.get(id = id)
        data={
            'id':ct.id,
            'name':ct.name
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)

def categ_prod(request, id):
    try:
        ct = Category.objects.get(id=id)
        pr = ct.products.all()

        data=[]
        for p in pr:
            data.append({
                'id':p.id,
                'name':p.name,
                'price':p.price
            })
        return JsonResponse(data, safe=False)
        
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Not found'}, status=404)