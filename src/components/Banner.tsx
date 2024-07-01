import Text from "./Text";
import { version } from "../../config.json";

const asciiText = `
██╗░░░██╗██╗██╗░░░██╗███████╗██╗░░██╗
██║░░░██║██║██║░░░██║██╔════╝██║░██╔╝
╚██╗░██╔╝██║╚██╗░██╔╝█████╗░░█████═╝░
░╚████╔╝░██║░╚████╔╝░██╔══╝░░██╔═██╗░
░░╚██╔╝░░██║░░╚██╔╝░░███████╗██║░╚██╗
░░░╚═╝░░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝
`;

const tuxAscii = `
                                                                     *@@@@@@@@@@@@@@@@@+                                                              
                                                                @@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                          
                                                            +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                       
                                                          *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                     
                                                        +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*                                                   
                                                       %@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                  
                                                      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                 
                                                     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                                
                                                    +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%                                               
                                                    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                               
                                                  =#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              
                                                  =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                              
                                                  =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                             
                                                  +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                             
                                                  #@@@@@@@@@@@@@@@@@@@@@@@@@@@*========@@@@@@@@@@@@@@@@@@                                             
                                                  %@@@@@@=======@@@@@@@@@@@@%============@@@@@@@@@@@@@@@@+                                            
                                                  %@@@@@=========@@@@@@@@@@+==============@@@@@@@@@@@@@@@@                                            
                                                  %@@@@===========@@@@@@@@%======+%*=======@@@@@@@@@@@@@@@                                            
                                                  %@@@#====@@@=====@@@@@@@+====*@@@@@*=====%@@@@@@@@@@@@@@                                            
                                                  #@@@+===@@@@@====@@@@@@@====+@@@@@@@======@@@@@@@@@@@@@@                                            
                                                  #@@@+==*@@@@@@===@@@@@@@====@@@@@@@@@====+@@@@@@@@@@@@@@                                            
                                                  +@@@%==*@@@@@@=@@@@@@@@@@@%=@@@@@@@@%====%@@@@@@@@@@@@@@                                            
                                                  =@@@@===@@@@@@@%**********@@@@@@@@@@====+@@@@@@@@@@@@@@@                                            
                                                  =@@@@@===@@@@**@@@@***@@@@***#@@@@@=====@@@@@@@@@@@@@@@@                                            
                                                  =@@@@@@+@@@**********************#@@@@%@@@@@@@@@@@@@@@@@                                            
                                                  =@@@@@@@#*****************************%@@@@@@@@@@@@@@@@@                                            
                                                  =@@@@@***********************************@@@@@@@@@@@@@@@                                            
                                                  =@@@%*@****************************@@%***%@@@@@@@@@@@@@@                                            
                                                  *@@@**@@%************************@@@*****@@@@@@@@@@@@@@@                                            
                                                  @@@@@***@@%*******************@@@*******@@@@@@@@@@@@@@@@@                                           
                                                 +@@@@@@@***@@@*************%@@@********%@@@@@@@@@@@@@@@@@@+                                          
                                                 #@@@@@@@@@****@@@@@@@@@@@@@*********%@@@@@@@@@@@@@@@@@@@@@@                                          
                                                 @@@@@@@@@@@@@*******************@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                         
                                                @@@@@@@@@@@@@@@@**************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                                        
                                               %@@@@@@@@@@@@@@@@@@@*******@@@@@@@@@@@@+===%@@@@@@@@@@@@@@@@@@@@                                       
                                              *@@@@@@@@@@@@=@@@@@@@@@@@@@@@@@@@@@@#========@@@@@@@@@@@@@@@@@@@@@+                                     
                                             *@@@@@@@@@@@@@====@@@@@@@@@@@@@@@%=============@@@@@@@@@@@@@@@@@@@@@%                                    
                                            #@@@@@@@@@@@@@=========*@@@@@%==================%@@@@@@@@@@@@@@@@@@@@@@                                   
                                           @@@@@@@@@@@@@@@===================================@@@@@@@@@@@@@@@@@@@@@@@*                                 
                                          @@@@@@@@@@@@@@@=====================================@@@@@@@@@@@@@@@@@@@@@@@@                                
                                       @@@@@@@@@@@@@@@@#=====================================*@@@@@@@@@@@@@@@@@@@@@@@@*                              
                                       @@@@@@@@@@@@@@@@@=======================================@@@@@@@@@@@@@@@@@@@@@@@@@@                             
                                     %@@@@@@@@@@@@@@@@@=========================================@@@@@@@@@@@@@@@@@@@@@@@@@@+
                                    @@@@@@@@@@@@@@@@@@*==========================================@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                   @@@@@@@@@@@@@@@@@@@===========================================+@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                 *@@@@@@@@@@@@@@@@@@@=============================================%@@@@@@@@@@@@@@@@@@@@@@@@@@@
                                %@@@@@@@@@@@@@@@@@@@===============================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@*
                               @@@@@@@@@@@@@@@@@@@@*================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@#                     
                              @@@@@@@@@@@@@@@@@@@@%==================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@%
                             @@@@@@@@@@@@@@@@@@@@@===================================================+@@@@@@@@@@@@@@@@@@@@@@@@@@@@%
                            @@@@@@@@@@@@@@@@@@@@@=====================================================*@@@@@@@@@@@@@@@@@@@@@@@@@@@@%
                           @@@@@@@@@@@@@@@@@@@@@=======================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+
                          @@@@@@@@@@@@@@@@@@@@@*========================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+
                         @@@@@@@@@@@@@@@@@@@@@@==========================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        %@@@@@@@@@@@@@@@@@@@@@===========================================================+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@=============================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                       @@@@@@@@@@@@@@@@@@@@@@==============================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              
                      @@@@@@@@@@@@@@@@@@@@@@================================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@              
                      @@@@@@@@@@@@@@@@@@@@@*================================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@%             
                     @@@@@@@@@@@@@@@@@@@@@@==================================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                     @@@@@@@@@@@@@@@@@@@@@@==================================================================%@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                    *@@@@@@@@@@@@@@@@@@@@@===================================================================%@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                    @@@@@@@@@@@@@@@@@@@@@@=================================================================+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                    @@@@@@@@@@@@@@@@@@@@@@================================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                    @@@@@@@@@@@@@@@@@@@@@===============================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                    @@@@@@@@@@@@@@@@@@@@*==============================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                    @@@@@@@@@@@@@@@@@@@@+============================================================%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@             
                   +@@@@@@@@@@@@@@@@@@@@@@@=========================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              
                  +@@@@@@@@@@@@@@@@@@@@@@@@@@======================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@              
                 @@@@@@*******#@@@@@@@@@@@@@@@@#==================================================@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+            
                @@@@@@**********@@@@@@@@@@@@@@@@@@===============================================*@@@@@@@@**@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+          
               @@@@@**************@@@@@@@@@@@@@@@@@@=============================================@@@@@@@@****@@@@@@@@@@@@@@@@@@@*******@@@@@*         
           *@@@@@@#****************@@@@@@@@@@@@@@@@@@@===========================================@@@@@@@@*****@@@@@@@@@@@@@@@@**********@@@@@         
      +@@@@@@@@@%*******************@@@@@@@@@@@@@@@@@@@@========================================*@@@@@@@%*******@@@@@@@@@@#**************@@@@@=       
    @@@@@@@@@%***********************@@@@@@@@@@@@@@@@@@@@=======================================@@@@@@@@**********************************@@@@=       
  @@@@@@@%****************************@@@@@@@@@@@@@@@@@@@@+=====================================@@@@@@@@**********************************@@@@@       
 @@@@@*********************************@@@@@@@@@@@@@@@@@@@@+====================================@@@@@@@@***********************************@@@@       
 @@@@***********************************@@@@@@@@@@@@@@@@@@@@===================================+@@@@@@@@***********************************%@@@@
 @@@@************************************@@@@@@@@@@@@@@@@@@@%==================================%@@@@@@@%************************************@@@@@
 @@@@*************************************@@@@@@@@@@@@@@@@@@@==================================@@@@@@@@**************************************@@@@@@
 @@@@%**************************************@@@@@@@@@@@@@@@@#==================================@@@@@@@@***************************************#@@@@@
 @@@@@***************************************@@@@@@@@@@@@@@@==================================%@@@@@@@%*****************************************@@@@@ 
 =@@@@****************************************@@@@@@@@@@@@*===================================@@@@@@@@*******************************************@@@@@
 =@@@@*****************************************#@@@@@@@@@*===================================@@@@@@@@@********************************************@@@@
 *@@@@*******************************************@@@@@@@@@@%==============================@@@@@@@@@@@********************************************@@@@@
 @@@@%********************************************@@@@@@@@@@@@@======================*@@@@@@@@@@@@@@@*****************************************@@@@@@@ 
%@@@@**********************************************%@@@@@@@@@@@@@@@%+=========+%@@@@@@@@@@@@@@@@@@@@***************************************@@@@@@@@#  
@@@@@************************************************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@***********************************@@@@@@@@@@     
@@@@#*************************************************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%********************************@@@@@@@@@*        
@@@@%*************************************************#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@******************************%@@@@@@@@            
%@@@@@#************************************************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@****************************@@@@@@@+               
 #@@@@@@@@@@@@@%#**************************************@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@**************************@@@@@@*                  
    @@@@@@@@@@@@@@@@@@@@@#****************************@@@@@@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@@@************************@@@@@@                     
         +#@@@@@@@@@@@@@@@@@@@%**********************@@@@@@@@@#*                               @@@@@*********************@@@@@@                       
                    +=*%@@@@@@@@@@@****************@@@@@@+                                     #@@@@@******************@@@@@@%                        
                            %@@@@@@@@@@@@%%###%@@@@@@@@@                                        #@@@@@#*************@@@@@@@@                          
                                %@@@@@@@@@@@@@@@@@@@@@                                            @@@@@@@%****%@@@@@@@@@@*                            
                                    +*@@@@@@@@@@@@+                                                 @@@@@@@@@@@@@@@@@@@                               
                                                                                                      @@@@@@@@@@@%                                   
`;

export function Banner() {
  return (
    <>
      <div className="pl-2">
        <div className="flex items-center">
          <pre>{asciiText}</pre>
          <pre className="ml-5 text-[1.5px]">{tuxAscii}</pre>
        </div>
        <br />
        <Text>Welcome to my terminal portfolio. (Version {version})</Text>
        <br />
        For a list of available commands, type{" `"}
        <span className="text-blue-400">help</span>`
      </div>
      <br />
    </>
  );
}