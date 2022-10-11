import { formatDateCreate } from './helpers/formatDateCreate';

export function createContact({ name, phone, email, id, createdAt }) {
  return /*HTML*/ `<div data-id="${id}" class="col-md-6 js-contact-card">
      <div class="card mb-2 shadow">
        <div class="d-flex justify-content-between pb-3 border-bottom">
          <div class="d-flex flex-row align-items-center gap-1">
            <div class="icon">
               <span class="material-icons-outlined"> contacts </span>
            </div>
            <div class="ms-2 c-details">
              <h2 class="h5 mb-0 fw-bold">${id} - ${name}</h2>
              <span>${formatDateCreate(createdAt)}</span>
            </div>
          </div>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="mt-2">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d">
              <a
                href="tel:+${phone}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2"> phone </span> ${phone}</a
              >
            </li>
            <li class="list-group-item">
              <a
                href="mailto:${email}"
                class="d-flex align-items-center text-secondary text-decoration-none nav-link"
                ><span class="material-icons-round me-2">
                  alternate_email
                </span>
                ${email}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>`;
}
