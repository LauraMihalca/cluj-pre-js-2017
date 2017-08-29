const NAV = function (options = {}) {
    return `
    <header>
        <img src="assets/images/logo-v2.png" alt="Softvision Logo" class="eval-sv-logo">
        <nav class="eval-header-nav">
        <a href="#evaluations" class="eval-header-links eval-header-links-skin default-font" id="evaluations">Evaluations</a>
        <a href="#newEvaluations"class="eval-header-links eval-header-links-skin default-font" id="new-evaluation">New Evaluation</a>
        </nav>
        <a href="#logout" class="eval-header-logout-button eval-header-logout-button-skin default-font" id="logout">Log out</a>
        <hr class="eval-header-bottom eval-header-bottom-skin">
    </header>
  `;
};

const Footer = function () {
    return `
    <footer class="footer-skin col-3 default-font bold">
        <p>Copyright@Softvision 2017</p>
    </footer>
    `;
};
