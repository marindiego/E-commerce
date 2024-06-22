const Footer = () => {
    return (
        (
            <footer className="bg-gray-800 text-white py-12">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                  {/* Company Information */}
                  <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h5 className="text-lg font-semibold mb-4">TechHaven</h5>
                    <p className="text-gray-400">
                        Your destination for the latest in technology. <br />Find the best smartphones, tablets, and accessories at the best prices.
                    </p>
                  </div>
        
                  {/* Navigation Links */}
                  <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
                    <ul>
                      <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
                    </ul>
                  </div>
        
                  {/* Social Media Links */}
                  <div className="w-full md:w-1/4 mb-8 md:mb-0">
                    <h5 className="text-lg font-semibold mb-4">Follow us</h5>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-white" aria-label="Facebook">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557a9.925 9.925 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3c-.935.556-1.977.962-3.087 1.184a4.922 4.922 0 0 0-8.379 4.482A13.978 13.978 0 0 1 1.671 3.149a4.914 4.914 0 0 0 1.523 6.573A4.903 4.903 0 0 1 .964 9.15v.06a4.922 4.922 0 0 0 3.946 4.827 4.933 4.933 0 0 1-2.212.084A4.922 4.922 0 0 0 8.29 18.29a9.867 9.867 0 0 1-7.29 2.034 13.94 13.94 0 0 0 7.548 2.21c9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.006 10.006 0 0 0 24 4.557z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0zM7.076 20.452H3.84V9.013h3.236v11.439zm-1.618-13.01c-1.034 0-1.874-.84-1.874-1.874 0-1.034.84-1.873 1.874-1.873 1.034 0 1.873.84 1.873 1.873 0 1.034-.839 1.874-1.873 1.874zm14.259 13.01h-3.236v-5.911c0-1.409-.027-3.225-1.964-3.225-1.965 0-2.267 1.536-2.267 3.119v6.017h-3.235V9.013h3.107v1.561h.045c.434-.823 1.492-1.69 3.071-1.69 3.285 0 3.89 2.163 3.89 4.977v6.591z" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163C6.507 2.163 2 6.671 2 12.163c0 4.547 3.222 8.304 7.438 9.603.545.101.743-.237.743-.524v-1.83c-3.02.652-3.654-1.424-3.654-1.424-.496-1.26-1.21-1.596-1.21-1.596-.989-.676.075-.663.075-.663 1.093.077 1.669 1.125 1.669 1.125.975 1.671 2.553 1.189 3.173.911.099-.706.382-1.189.696-1.462-2.406-.273-4.936-1.204-4.936-5.358 0-1.183.418-2.155 1.1-2.916-.111-.273-.48-1.372.105-2.857 0 0 .905-.29 2.96 1.1a10.278 10.278 0 0 1 2.7-.366c.914 0 1.834.123 2.7.366 2.052-1.39 2.956-1.1 2.956-1.1.585 1.486.217 2.585.106 2.857.684.761 1.1 1.733 1.1 2.916 0 4.163-2.536 5.083-4.947 5.353.393.34.744 1.008.744 2.033v3.009c0 .289.198.625.749.523C18.777 20.467 22 16.711 22 12.163 22 6.671 17.493 2.163 12 2.163z" />
                        </svg>
                      </a>
                    </div>
                  </div>
        
                  {/* Newsletter Subscription */}
                  <div className="w-full md:w-1/4">
                    <h5 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h5>
                    <p className="text-gray-400 mb-4">Receive the latest news and exclusive offers.</p>
                    <form className="flex">
                      <input type="email" placeholder="Tu email" className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none" />
                      <button className="px-4 py-2 rounded-r-md text-white hover:bg-indigo-700 bg-indigo-800">Subscribe</button>
                    </form>
                  </div>
                </div>
        
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                  <p>© 2024 TechHaven. All rights reserved.</p>
                </div>
              </div>
            </footer>
          )
    )
}

export default Footer;