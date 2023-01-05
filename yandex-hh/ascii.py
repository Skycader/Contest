a = list(map(int, input().split())) # считывание списка

cnt = [0] * (max(a) + 1)  # генерация списка нулей длиной в максимальный элемент списка a
print(cnt)
for item in a:
    cnt[item] += 1   # когда мы встречаем число в списке, увеличиваем его значение на 1

# добавляем count раз число num в результат
result = [num for num, count in enumerate(cnt) for i in range(count)] 

print(result)  # выводим отсортированный список
