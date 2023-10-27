import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  figuraSeleccionada: string = 'cuadrado';
  lado: number = 0;
  base: number = 0;
  altura: number = 0;
  radio: number = 0;
  resultado: { area: number, perimetro: number } | null = null;

  calcular(forma: any): void {
    // Lógica para calcular el área y el perímetro según la figura seleccionada
    switch (this.figuraSeleccionada) {
      case 'cuadrado':
        this.resultado = {
          area: this.lado * this.lado,
          perimetro: this.lado * 4
        };
        break;
      case 'triangulo':
        this.resultado = {
          area: (this.base * this.altura) / 2,
          perimetro: this.base + (2 * this.altura)
        };
        break;
      case 'rectangulo':
        this.resultado = {
          area: this.base * this.altura,
          perimetro: 2 * (this.base + this.altura)
        };
        break;
      case 'circulo':
        this.resultado = {
          area: Math.PI * (this.radio * this.radio),
          perimetro: 2 * Math.PI * this.radio
        };
        break;
      default:
        this.resultado = null;
    }
    if (this.resultado) {
      alert(`El resultado de tu operación es: Área = ${this.resultado.area}, Perímetro = ${this.resultado.perimetro}`);

    }
  }

  
}
