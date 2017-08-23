const LoginPage = function() {
    return `
        ${LoginHeader()}
        ${LoginSubmitFeedbackSection()}
        ${LoginSeeResultsSection()}
        ${Footer()}
    `
}

const LoginHeader = function() {
    return `
        <header>
            ${LoginForm()}
        </header>
    `;
}

const LoginForm = function() {
    return `
    <div class="grid">
    <div class="login-form login-common-skin">
          <form>
              <div class="login-form-header-skin default-font bold">
                <h3 class="login-form-header-text">Interview Feedback</h3>
              </div>
              <div class="login-form-items default-font">
                  <input class="login-form-items-input login-form-items-input-skin" type="text" placeholder="Username" name="username">
                  <input class="login-form-items-input login-form-items-input-skin" type="password" placeholder="Password" name="password">
                  <input class="login-form-button login-form-button-skin default-font" type="submit" value="Login">
              </div>
          </form>
        </div>
</div>
`;
}

const LoginSubmitFeedbackSection = function() {
    return `
        <section>
            <div class="grid login-section-1 login-common-skin">
            <div class="col-1">
                <img src="assets/images/new%20feedback.jpg" alt="NewFeedback" width="400">
            </div>

            <div class="col-2">
                <div class="login-section-text">
                    <h3>Submit New Feedback</h3>


                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </div>
            </div>
        </div>
    </section>
    `;

}

const LoginSeeResultsSection = function() {
    return `
    <section>
    <div class="grid login-section-2">

         <div class="col-2">
             <div class="login-section-text">
                  <h3>View Feedback Results</h3>


                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                      into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             </div>
         </div>

        <div class="col-1">
            <img src="assets/images/results.jpg" alt="NewFeedback" width="400">
        </div>
    </div>
</section>
    `;
    
}

const loginHTML = LoginPage();
window.onload = function() {
    const mainContent = document.querySelector('#content');
    mainContent.innerHTML = loginHTML;
}

