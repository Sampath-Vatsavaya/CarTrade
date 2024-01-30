describe('Email Calculator Test', () => {
  
  it('Positive Case', () => {
    var positive_list=[['784569','78','10','51024'],
    ['50000', '8', '5','1014'],           
    ['100000', '5', '10','1061'],       
    ['30000', '10', '3','968'],              
    ['500000', '7', '20','3876']]
    cy.visit('https://sampath-vatsavaya.github.io/CarTrade-Group/Sampath/Javascript-tasks/Emicalculator/index.html')
    for(let i=0;i<positive_list.length;i++)
    {
      cy.get("#principal").type(positive_list[i][0])
    cy.get("#interest").type(positive_list[i][1])
    cy.get("#tenure").type(positive_list[i][2])
    cy.get("#button").click()
    cy.wait(100)
    let s='₹'+positive_list[i][3]
    cy.get("#emi-val > h3").should('contain',s)
    cy.reload()
    }
  })
  it('Negative Case', () => {
    var negative_list=[['784569','78','10','513024'],
    ['50000', '8', '5','10214'],           
    ['100000', '5', '10','13061'],       
    ['30000', '10', '3','9638'],       
        
    ['500000', '7', '20','38176']]
    cy.visit('https://sampath-vatsavaya.github.io/CarTrade-Group/Sampath/Javascript-tasks/Emicalculator/index.html')
    for(let i=0;i<negative_list.length;i++)
    {
      cy.get("#principal").type(negative_list[i][0])
    cy.get("#interest").type(negative_list[i][1])
    cy.get("#tenure").type(negative_list[i][2])
    cy.get("#button").click()
    cy.wait(100)
    let s='₹'+negative_list[i][3]
    cy.get("#emi-val > h3").should('not.contain',s)
    cy.reload()
    }
  })

  it('Alert Case', () => {
    var alert_list=[    
    ['60000', '0', '7'],                        
    ['-20000', '8', '5'],          
   ['40000', '-5', '8'],          
   ['55000', '12', '-4'],         
  ]
    cy.visit('https://sampath-vatsavaya.github.io/CarTrade-Group/Sampath/Javascript-tasks/Emicalculator/index.html')
    for(let i=0;i<alert_list.length;i++)
    {
      cy.get("#principal").type(alert_list[i][0])
    cy.get("#interest").type(alert_list[i][1])
    cy.get("#tenure").type(alert_list[i][2])
    cy.get("#button").click()
    cy.wait(100)
    cy.on('window:alert',(x)=>{
      expect(x).to.contains("The Valid ranges for Principal,Interest rate and Loan Tenure are as following:\nPrincipal Amount:10000-1000000000000\nInterest Rate:5-95\nLoan Tenure(in Years):1-100\n\n Please Enter Valid Values!!")
    })
    cy.reload()
    }
  })


})