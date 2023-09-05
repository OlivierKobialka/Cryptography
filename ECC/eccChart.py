import matplotlib.pyplot as plt
import numpy as np


def visualize():
	a = int(input("Select height: "))
	b = int(input("Select width: "))

	y, x = np.ogrid[-5:5:100j, -5:5:100j]
	plt.contour(x.ravel(), y.ravel(), pow(y, 2) - pow(x, 3) - x * a - b, [0])
	plt.grid()
	plt.show()


# def point_multiplication():


visualize()
