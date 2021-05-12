export async function getInputs(path: string, iterations: number, runs: number){
  function getPath(path: string){
    path = process.argv[2]
  }

  function getIterations(iterations: number){
    iterations = +process.argv[3]
  }

  function getRuns(runs: number){
    runs = +process.argv[4]
  }

  

}


