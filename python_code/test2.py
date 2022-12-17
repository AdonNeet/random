import weakref

class A:
    instances = []
    def __init__(self, name=None):
        self.__class__.instances.append(weakref.proxy(self))
        self.name = name

a1 = A('a1')
a2 = A('a2')
a3 = A('a3')
a4 = A('a4')

for instance in A.instances:
    print(instance.name)