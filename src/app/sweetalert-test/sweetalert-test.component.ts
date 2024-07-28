import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert-test',
  templateUrl: './sweetalert-test.component.html',
  styleUrls: ['./sweetalert-test.component.scss']
})
export class SweetalertTestComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.reloginAgain()
    // this.testApi()
    this.openSwal();
  }
  reloginAgain() {
    let isPasswordMatched: string = "";
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-primary'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      html: `
      <div style="padding: 1rem 0 0 0">
        <i style="color: red; font-size: 4rem;">
          <i class="bi bi-clock-history"></i>
        </i>
        <h3 style="margin-top: 1.5rem;">Your session has expired due to inactivity.</h2>
        <span style='color: black; font-size: 0.9rem; font-weight: 500; text-transform: none; margin-bottom: 0.5rem'>Enter your password below</span>
      </div>
      `,
      input: "text",
      inputAttributes: {
        style: "font-size: .875rem; margin: auto; width: 15rem; text-align: center", placeholder: "* * * * * *"
      },
      width: 500,
      showCancelButton: false,
      allowOutsideClick: false,
      confirmButtonText: 'Submit',
      preConfirm: async (password) => {
        try {
          if (!password) swalWithBootstrapButtons.showValidationMessage("");
          else if (password !== "javid") {
            console.log("invalid password", password)
            swalWithBootstrapButtons.showValidationMessage("Invalid Password.")
          }
          // this.ajaxService.ajaxPostWithBody(ServerUrl.live + ServerUrl.formsUrl, body).subscribe()
        } catch (error) { console.error(error) }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        // this.router.navigateByUrl("login");
      }
    })
  }




  testApi() {
    Swal.fire({
      html: `
      <div style="padding: 1rem 0 0 0">
        <i style="color: red; font-size: 4rem;">
          <i class="bi bi-clock-history"></i>
        </i>
        <h3 style="margin-top: 1.5rem;">Your session has expired due to inactivity.</h2>
        <span style='color: black; font-size: 0.9rem; font-weight: 500; text-transform: none; margin-bottom: 0.5rem'>Enter your password below</span>
      </div>
      `,

      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }






  openSwal() {
    Swal.fire({
      html: `
        <div style="padding: 1rem 0 0 0">
          <i style="color: red; font-size: 4rem;">
            <i class="bi bi-clock-history"></i>
          </i>
          <h3 style="margin-top: 1.5rem;">Your session has expired due to inactivity.</h2>
          <span style='color: black; font-size: 0.9rem; font-weight: 500; text-transform: none; margin-bottom: 0.5rem'>Enter your password below</span>
        </div>
      `,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      // showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: (password) => {
        return this.http.post('https://ge-fleetonqa.thegoldenelement.com/Admin/login/company', {
          username: 'airportadmin',
          password: password.trim(),
          corpid: 'airportadmin',
        }).pipe(
          map((response) => {
            if (!response) {
              throw new Error(JSON.stringify(response));
            }
            return response;
          })
        );
      },
    }).then((result) => {
      if (result.isConfirmed) {
         console.log('result',result)
      }
    });
  }
}




