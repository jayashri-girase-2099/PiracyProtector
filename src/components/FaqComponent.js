import React from 'react'


const FaqComponent = () => {
    return (
      <div>
   {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
            <h1 class="display-5 text-white mb-3 animated slideInDown">FAQ (Frequently Asked Question)</h1>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

   
{/* FAQ start */}
<div class="container">
    <div className="section-title text-center">
                <h1 className="display-5 mb-5">FAQ</h1>
    </div>
  <div class="row">
    <div class="col-md-12">
      <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               What is piracy protector?
              </a>
            </h4>
        </div>
          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
            Data structure is a fundamental concept of any programming language, essential for algorithmic
             design.
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               What is Data Structure?
              </a>
            </h4>
            </div>
          <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">Data structure is a fundamental concept of any programming language, essential for algorithmic design.
          </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Benefits of Learning Data Structures
              </a>
            </h4>
         </div>
          <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div class="panel-body">
                Any given problem has constraints on how fast the problem should be solved (time) and how much 
                less resources the problem consumes(space). That is, a problem is constrained by the space and 
                time complexity within which it has to be solved efficiently.
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingFour">
            <h4 class="panel-title">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                What is an array?
              </a>
            </h4>
          </div>
          <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                 ad squid. 
            </div>
          </div>
         </div>

         <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingFive">
            <h4 class="panel-title">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                What is an function?
              </a>
            </h4>
         </div>
          <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
            <div class="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                 ad squid. 
            </div>
          </div>
         </div>

     </div>
    </div>
  </div>
</div>
{/* FAQ end */}

 {/* <!-- Support Button--> */}
<div class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp" data-wow-delay="0.5s" >
     <i class="lni-emoji-sad"></i>
    <p class="mb-0 px-2">Can't find your answers?</p>
    <a href="#"> Contact us</a>
</div>
           
   
</div>
        
    
        )
    }
    
    export default FaqComponent;