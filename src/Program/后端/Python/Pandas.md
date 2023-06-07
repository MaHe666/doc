---
title: Pandas
order: 40
---

官网：<https://pandas.pydata.org/>

中文官网：<https://www.pypandas.cn/>

Pandas是Python编程语言的用于数据操纵和分析的软件库。

特别是，它提供操纵数值表格和时间序列的数据结构和运算操作

## 简单的输出excel

```python
import pandas as pd

#创建一个数据表
df = pd.DataFrame({
    #为表格中添加数据
    'id':[1,2,3],
    'name':['Spike','Tom','Jerry']
})

#使用自己的id作为索引
df = df.set_index('id')

print(df)

#输出为excel表格
df.to_excel("./output.xlsx")

print("done")
```

---

## 简单的读取excel

### 处理列表头

```python
import pandas as pd

#读取excel表格，并封装为对象
df = pd.read_excel('./output.xlsx')

#获取对象中的行数和列数
print(df.shape)

#获取列头信息
print(df.columns)

#打印表格全部的信息
print(df)

#打印表格的前两个信息
print(df.head(2))

#打印表格的后两个信息
print(df.tail(2))
```

### 读取时指定索引列

```python
import pandas as pd

#也可以在读取时直接指定索引列
df = pd.read_excel("./output.xlsx",index_col='id')

print(df)
```

---

## 行，列，单元格

```python
import pandas as pd

# pandas序列中，data、name和index是非常重要的

'''
pandas序列的值和字典的键值对差不多
d={'x':100,'y':200,'c':300}
s1 = pd.Series(d)
print(s1)
'''

s1 = pd.Series([1, 2, 3], index=[1, 2, 3], name='A')
s2 = pd.Series([10, 20, 30], index=[1, 2, 3], name='B')
s3 = pd.Series([100, 200, 300], index=[1, 2, 3], name='C')

# 注意加入的方式！！！
# 键值对方式是以序列的index作为行号
# 列表方式是以序列的index作为列号
df1 = pd.DataFrame({s1.name: s1, s2.name: s2, s3.name: s3})
print(df1)
df2 = pd.DataFrame([s1, s2, s3])
print(df2)
```

### pandas中DataFrame定位数据单元格的方法集锦

相关博客：

- <https://blog.csdn.net/weixin_30650859/article/details/97578737>

- <https://www.cnblogs.com/guxh/p/8627251.html>

---

## 数据填充

### 填充数字，字符串及日期

```python
import pandas as pd
from datetime import date, timedelta

# 月份+1的算法
def add_month(d, md):
    yd = md // 12
    m = d.month + md % 12
    if m != 12:
        yd += m // 12
        m = m % 12
    return date(d.year + yd, m, d.day)

# skiprows为跳过多少个空行
# usecols为以列标为基准读取从哪到哪的列，两边的都包括
# dtype是为列设置为类型，注意：NaN类型不能转为int类型，所以需要先转为str类型才可以
books = pd.read_excel("./excel/Books.xlsx", skiprows=3, usecols="C:F", dtype={'id': str, 'is_inRepo': str, 'date': str})

start = date(2022, 1, 1)

for i in books.index:
    books['id'].at[i] = i + 1
    books['is_inRepo'].at[i] = 'Yes' if i % 2 == 0 else 'No'
    # 天数+1
    # books['date'].at[i] = start + timedelta(days=i)
    # 年数+1
    # books['date'].at[i] = date(start.year + i, start.month, start.day)
    # 月数+1
    books['date'].at[i] = add_month(start,i)
books.set_index('id', inplace=True)
print(books)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/Books.xlsx')" download>Books.xlsx</a>

### 填充函数，计算列

```python
import pandas as pd

books = pd.read_excel("./excel/Books2.xlsx")

# pandas操作的是列，而不是单元格
# 也可以使用for循环迭代对单元格进行操作
books['finalPrice'] = books['price'] * books['discount']

def add_2(x):
    return x + 2

# 让原有的价格都上涨2元
books['price'] = books['price'].apply(add_2)

print(books)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/Books2.xlsx')" download>Books2.xlsx</a>

---

## 排序，多重排序

```python
import pandas as pd

items = pd.read_excel("./excel/Items.xlsx", index_col='id')

# 按照价格排序，ascending为从小到大排序，默认为true，false为从大到小
# items.sort_values(by='price',inplace=True,ascending=False)


# 多重排序，worthy为从小到大A-Z，price为大到小
# 先排序哪个，就把列表名先写在前面
# ascending 为是否升序排序（从小到大）
items.sort_values(by=['worthy', 'price'], inplace=True, ascending=[True, False])
print(items)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/Items.xlsx')" download>Items.xlsx</a>

---

## 数据筛选，过滤

```python
import pandas as pd


def age_18_to_30(a):
    return 18 <= a < 30


def score_85_to_100(s):
    return 85 <= s <= 100


scores = pd.read_excel("./excel/Score1.xlsx", index_col='id')
# loc是locate的缩写，是定位的意思
# 筛选年龄在18-30，分数在85-100之间的数据
scores = scores.loc[scores['age'].apply(age_18_to_30)].loc[scores['score'].apply(score_85_to_100)]
print(scores)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/Score1.xlsx')" download>Score1.xlsx</a>

---

## 柱状图

```python
import pandas as pd
# 制图需要的依赖
import matplotlib.pyplot as plt

data = pd.read_excel("./excel/BarChart.xlsx")
# 如果数据是乱的，需要先对数据进行排序，然后再渲染图表

print(data)
# --------------------------------------------------------------
# 使用color属性为所有的column选定统一的颜色
# 使用title为图表命名
#data.plot.bar(x='name', y='number', color='orange', title='test1')

# 显示全名
# plt.tight_layout()

# 渲染图表
# plt.show()

# --------------------------------------------------------------
plt.bar(data['name'], data['number'],color='blue')
# 设置名字的列及显示角度
plt.xticks(data['name'],rotation='90')
# 设置横向的label
plt.xlabel('name')
# 设置纵向的label
plt.ylabel('number')
# 设置表名及字号
plt.title('test2',fontsize=16)

plt.tight_layout()
plt.show()
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/BarChart.xlsx')" download>BarChart.xlsx</a>

### 分组柱状图深度优化

```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_excel("./excel/BarChart2.xlsx")

print(data)

data.plot.bar(x='name', y=['a', 'b'], color=['red', 'blue'])
plt.title("test", fontsize=16, fontweight='bold')
plt.xlabel('name', fontweight='bold')
plt.ylabel('number', fontweight='bold')

# gca为优化轴
ax = plt.gca()
# ha为对齐的位置
ax.set_xticklabels(data['name'], rotation=45, ha='right')

# gcf为优化图像
f = plt.gcf()
#左边留出20%，底部留出42%
f.subplots_adjust(left=0.2, bottom=0.42)

# plt.tight_layout()

plt.show()
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/BarChart2.xlsx')" download>BarChart2.xlsx</a>

### 叠加水平柱状图

```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_excel("./excel/BarChart3.xlsx")

print(data)

#可以根据总量进行排序
data['Total'] = data['a']+data['b']+data['c']

print(data)

#stacked为数据堆叠
#垂直
data.plot.bar(x='name', y=['a', 'b', 'c'], stacked=True)
#水平
data.plot.barh(x='name', y=['a', 'b', 'c'], stacked=True)
plt.show()
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/BarChart3.xlsx')" download>BarChart3.xlsx</a>

---

## 饼状图

```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_excel("./excel/PieChart.xlsx", index_col='name')

print(data)

# python的旋转为逆时针，excel中为顺时针，这里的排序是为了和excel的旋转顺序一致
# data['num'].sort_values(ascending=True).plot.pie(fontsize=8,startangle=-270)

# 还有一种方式
data['num'].plot.pie(fontsize=8, counterclock=False, startangle=-270)

plt.title('testTitle', fontsize=16, fontweight='bold')
plt.show()
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/PieChart.xlsx')" download>PieChart.xlsx</a>

---

## 折线图与叠加区域图

```python
import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_excel("./excel/LineChart.xlsx", index_col='name')

print(data)

# 折线图
data.plot(y=['num1', 'num2'])

# 叠加区域图
data.plot.area(y=['num1', 'num2'])

plt.ylabel('num')

# 如果想在横坐标展示出所有的信息，就使用下面的语句
# plt.xticks(data.name, fontsize=8)

plt.show()
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/LineChart.xlsx')" download>LineChart.xlsx</a>

---

## 散点图

```python
import pandas as pd
import matplotlib.pyplot as plt

# 设置最大展示的列的数量
pd.options.display.max_columns = 999

data = pd.read_excel("./excel/ScatterChart.xlsx")

print(data)

# 想和excel一样，把下面的x和y颠倒一下即可
data.plot.scatter(x='name', y='num')
plt.show()
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/ScatterChart.xlsx')" download>ScatterChart.xlsx</a>

---

## 直方图与密度图

```python
import pandas as pd
import matplotlib.pyplot as plt

pd.options.display.max_columns = 999

data = pd.read_excel("./excel/Histogram.xlsx")

print(data)

# 直方图
# 分布区间也称为桶,这里我们设为100，就是往100个桶里装
data['num'].plot.hist(bins=100)

# 密度图
data['num'].plot.kde()

plt.xticks(range(0, max(data['num']), 2), fontsize=8, rotation=90)

plt.show()

# data.corr() 方法用于查看列与列之间的相关性
# 1代表是同一列，除此之外，越接近1，相关性就越多
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/Histogram.xlsx')" download>Histogram.xlsx</a>

---

## 多表联合

```python
import pandas as pd

name = pd.read_excel("./excel/multiTables/name.xlsx", sheet_name='Sheet1')
score = pd.read_excel("./excel/multiTables/score.xlsx", sheet_name='Sheet1')

# 可以发现，多余的数据并没有显示出来，现在默认的联表方式为inner join
# table = name.merge(score, on='id')

# 左连接，并且用0填充NaN
table = name.merge(score, how='left', on='id').fillna(0)

# 将类型转换为int
table['score'] = table['score'].astype(int)

# 如果不设置on='id'，而是用index_col='id',使用merge就会出错。
# 这个时候需要将merge换成join就好

print(table)
```

#### 附件

- <a :href="$withBase('/files/Python/Pandas/name.xlsx')" download>name.xlsx</a>

- <a :href="$withBase('/files/Python/Pandas/score2.xlsx')" download>score2.xlsx</a>

---

## 数据校验，轴的概念

```python
import pandas as pd


def validation(row):
    #这里可以用异常的方式来处理，也可以用if语句来处理
    try:
        assert row['num'] >= 0
    except:
        print(f"{row['name']} 的数字不符合规范：{row['num']}")


data = pd.read_excel("./excel/DataValidation.xlsx")

# axis是轴，1为横轴，0为竖轴，我们这里校验数据需要一行一行的校验
data.apply(validation, axis=1)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/DataValidation.xlsx')" download>DataValidation.xlsx</a>

---

## 将一列数据分割成两列

```python
import pandas as pd

data = pd.read_excel("./excel/SeperateCol.xlsx", index_col='id')

# 将一列的内容分割为列表,默认分隔符为空格或tab
# df = data['name'].str.split()

# 将一列直接分为两列，参数n为0或1时是保留全部截取下来的字符串
# df = data['name'].str.split(n=0,expand=True)
df = data['name'].str.split('', n=0, expand=True)

data['name1'] = df[0]
data['name2'] = df[1]

print(data)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/SeperateCol.xlsx')" download>SeperateCol.xlsx</a>

---

## 求和、求平均，统计导引

```python
import pandas as pd

data = pd.read_excel("./excel/SumAndAverage.xlsx", index_col='id')

# 将三列数据放到一个新的数据表中
df = data[['num1', 'num2', 'num3']]

# 处理横向的总值和平均值
data['sum'] = df.sum(axis=1)
data['average'] = df.mean(axis=1)

# 列的平均值
col_mean = data[['num1', 'num2', 'num3', 'sum', 'average']].mean(axis=0)

data = data.append(col_mean, ignore_index=True)

print(data)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/SeperateCol.xlsx')" download>SeperateCol.xlsx</a>

---

## 定位，消除重复数据

```python
import pandas as pd

data = pd.read_excel("./excel/RemoveDuplicatedData.xlsx",index_col='id')

# subset参数为以哪一列为基准去除重复数据
# keep参数为当有重复数据时，保留第几个，默认为first，我们可以改成last，使其去掉前面的重复数据
# data.drop_duplicates(subset='name',inplace=True)

# print(data)

# 使用pandas找出重复数据
dup = data.duplicated(subset='name')

# 其中为True的就是重复数据
# print(dup)
# 为True则该表包含重复数据，false为不包含
# print(dup.any())

#做个简单的定位，锁定为True的数据
dup = dup[dup == True]
#获取重复数据索引
# print(dup.index)
print(data.loc[dup.index])
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/RemoveDuplicatedData.xlsx')" download>RemoveDuplicatedData.xlsx</a>

---

## 旋转表格

```python
import pandas as pd

pd.options.display.max_columns = 999

data = pd.read_excel("./excel/RotateTable.xlsx")

df = data.transpose()

print(df)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/RotateTable.xlsx')" download>RotateTable.xlsx</a>

---

## 读取csv，tsv，txt，html

```python
import pandas as pd

csvData = pd.read_csv("./excel/otherFile/csv.csv")

# tsvData = pd.read_csv("./excel/otherFile/tsv.tsv",sep='\t')

#sep为分隔符
txtData = pd.read_csv("./excel/otherFile/txt.txt", sep='\t')

htmlData = pd.read_html("./excel/otherFile/html.htm", header=0)[0]

htmlData.set_index("id", inplace=True)
```

#### 附件

- <a :href="$withBase('/files/Python/Pandas/html.htm')" download>html.htm</a>

- <a :href="$withBase('/files/Python/Pandas/txt.txt')" download>txt.txt</a>

- <a :href="$withBase('/files/Python/Pandas/csv.csv')" download>csv.csv</a>

---

## 透视表、分组、聚合

```python
import pandas as pd
import numpy as np

data = pd.read_excel("./excel/PivotTable.xlsx")

data['year'] = pd.DatetimeIndex(data['date']).year

# index是rose
# pt1 = data.pivot_table(index='type', columns='year', values='num')
# print(pt1)

groups = data.groupby(['type', 'year'])

s = groups['num'].sum()
c = groups['name'].count()

pt2 = pd.DataFrame({'sum': s, 'count': c})
print(pt2)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/PivotTable.xlsx')" download>PivotTable.xlsx</a>

---

## 线性回归，预测趋势

```python
import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

data = pd.read_excel("./excel/LinearRegression.xlsx", index_col='id')

# 开始画趋势线
'''
slope是斜率
intercept是在外轴上的截距
exp为期望值
'''
slope, intercept, r, p, std_err = linregress(data.index, data['num'])
exp = data.index * slope + intercept

# 先做一个散点图
plt.scatter(data.index, data['num'])
# 再划线
plt.plot(data.index, exp, color='orange')
# plt.title("LinearRegression")
plt.title(f"y={slope}*x+{intercept}")
plt.xticks(data.index, data.index, rotation=90)
plt.tight_layout()
plt.show()

# 预测下一年的数字
print(slope * 35 + intercept)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/LinearRegression.xlsx')" download>LinearRegression.xlsx</a>

---

## 条件格式

这里我们需要用到 Jupyter notebook

打开Anaconda Prompt，输入jupyter notebook或者直接打开jupyter notebook

然后点击左上角的new，选择Python3

#### 附件

<a :href="$withBase('/files/Python/Pandas/ConditionalFormat.xlsx')" download>ConditionalFormat.xlsx</a>

### 按照条件修改数据颜色

```python
import pandas as pd

def low_num_red(num):
    color = 'red' if num<50 else 'black'
    return f'color:{color}'

def high_num_green(col):
    return ['background-color:lime' if num==col.max() else 'background-color:white' for num in col]

data = pd.read_excel(r'D:\myCodes\python\eTest\excel\ConditionalFormat.xlsx')

#apply是按照行或列进行施加，applymap是无差别施加
data.style.applymap(low_num_red,subset=['num1','num2','num3']).apply(high_num_green,subset=['num1','num2','num3'])
```

### 按照条件修改数据颜色深浅

```python
import pandas as pd

def low_num_red(num):
    color = 'red' if num<50 else 'black'
    return f'color:{color}'

def high_num_green(col):
    return ['background-color:lime' if num==col.max() else 'background-color:white' for num in col]

data = pd.read_excel(r'D:\myCodes\python\eTest\excel\ConditionalFormat.xlsx')

#apply是按照行或列进行施加，applymap是无差别施加
data.style.applymap(low_num_red,subset=['num1','num2','num3']).apply(high_num_green,subset=['num1','num2','num3'])
```

### 按照条件修改数据颜色填充度

```python
import pandas as pd

data = pd.read_excel(r'D:\myCodes\python\eTest\excel\ConditionalFormat.xlsx')

data.style.bar(color='orange',subset=['num1','num2','num3'])
```

---

## 行操作集锦

```python
import pandas as pd

sheet1 = pd.read_excel("./excel/RowOperate.xlsx", sheet_name='1')
sheet2 = pd.read_excel("./excel/RowOperate.xlsx", sheet_name='2')

# 拼接，并使用新的id
data = sheet1.append(sheet2).reset_index(drop=True)

# data['id'] = data.index

person1 = pd.Series({'id': 14, 'name': 'oo', 'num': 99})
data = data.append(person1, ignore_index=True)

# 向数据中间插入一条数据,这里的例子是向3和4之间添加
person2 = pd.Series({'id': 4, 'name': 'pp', 'num': 111})
    # 这里进行切片，注意区间的包左不包右的特性
part1 = data[:4]
part2 = data[4:]
data = part1.append(person2, ignore_index=True).append(part2).reset_index(drop=True)

# 按照id，删除行数据，可以用切片的方式，也可以用range函数的方式
data.drop(index=[0, 1, 2], inplace=True)

# 按照某一列的数据，删除符合条件的行
missing = data.loc[data['name'] == '']
data.drop(index=missing.index,inplace=True)

print(data)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/RowOperate.xlsx')" download>RowOperate.xlsx</a>

---

## 列操作集锦

```python
import pandas as pd
import numpy as np

sheet1 = pd.read_excel("./excel/ColOperate.xlsx", sheet_name='1')
sheet2 = pd.read_excel("./excel/ColOperate.xlsx", sheet_name='2')

# 并列显示
# data = pd.concat([sheet1, sheet2], axis=1).reset_index(drop=True)

data = pd.concat([sheet1, sheet2]).reset_index(drop=True)

# 添加列，np.arrange()函数会返回一个列表
data['age'] = np.arange(0, len(data))

# 删除列
data.drop(columns='age', inplace=True)

# 新增列，支持向两个列中间添加,第一个数字为目标列号，默认为inplace=True
data.insert(1, column='newCol', value='newCol')

# 列名改为大写
data.rename(columns={'id': 'ID', 'newCol': 'NEWCOL'},inplace=True)

# 去掉有not a number的行（NaN）
data.dropna(inplace=True)


print(data)
```

#### 附件

<a :href="$withBase('/files/Python/Pandas/ColOperate.xlsx')" download>ColOperate.xlsx</a>

---

## 实战

### 获取文件夹下的所有文件绝对路径

```python
import os


def get_file_path_by_name(file_dir):
    '''
    获取指定路径下所有文件的绝对路径
    :param file_dir:
    :return:
    '''
    L = []
    for root, dirs, files in os.walk(file_dir):  # 获取所有文件
        for file in files:  # 遍历所有文件名
            if os.path.splitext(file)[1] == '.xlsx':
                L.append(os.path.join(root, file))  # 拼接处绝对路径并放入列表
    print('总文件数目：', len(L))
    return L


print(get_file_path_by_name(r'D:\tmp'))
```

### 设置数据表显示在控制台的属性

```python
#设置最大展示的列数
pd.options.display.max_columns = 999

#设置最多展示的行数
pd.options.display.max_rows = 999

#设置输出到控制台时的宽度
pd.options.display.width = 1000
```



