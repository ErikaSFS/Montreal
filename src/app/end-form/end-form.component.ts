import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { End } from '../model/end.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'end-form',
  templateUrl: './end-form.component.html',
  styleUrls: ['./end-form.component.css'],
})
export class EndFormComponent implements OnInit {
  address: End;
  addressForm: FormGroup;
  formattedCep: string;

  constructor(private fb: FormBuilder, private endService: AppService) {}

  ngOnInit(): void {
    this.endService.getAddress().subscribe((response) => {
      this.address = response;

      this.createForm();

      const endData = localStorage.getItem('formData');

      if (endData) {
        const updateAddressData = JSON.parse(endData);
        this.endForm.patchValue(updateendData);
      }
    });
  }

  createForm() {
    this.endForm = new FormGroup({
      cep: new FormControl(
        this.end.cep,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(8),
          Validators.maxLength(8),
        ])
      ),
      logradouro: new FormControl(this.end.logradouro, Validators.required),
      complemento: new FormControl(
        this.end.complemento,
        Validators.required
      ),
      bairro: new FormControl(this.end.bairro, Validators.required),
      localidade: new FormControl(this.end.localidade),
      uf: new FormControl(this.end.uf, Validators.required),
      ibge: new FormControl({ value: this.end.ibge, disabled: true }),
      gia: new FormControl(this.end.gia, Validators.required),
      ddd: new FormControl(this.end.ddd, Validators.required),
      siafi: new FormControl({ value: this.end.siafi, disabled: true }),
    });
  }

  saveEnd() {
    if (this.endForm.valid) {
      localStorage.setItem('formData', JSON.stringify(this.endForm.value));
    }
  }

  displayCepErrorMsg() {
    if (this.endForm.controls.cep.hasError('required')) {
      return 'O CEP é obrigatório.';
    }

    if (this.endForm.controls.cep.hasError('pattern')) {
      return 'O CEP é somente números.';
    }

    if (this.endForm.controls.cep.hasError('minlength')) {
      return 'O CEP deve conter 8 números.';
    }

    if (this.endForm.controls.cep.hasError('maxlength')) {
      return 'O CEP deve conter 8 números';
    }

    return '';
  }
}