function minimumCoinChange(coins, exchange) {
    function min(a, b) {
        return a < b ? a : b;
    }

    // DS creation
    var ds = new Array(coins.length).fill().map(() => Array(exchange + 1))
    var coinsSet = new Array(coins.length).fill().map(() => Array(exchange + 1))

    for(var i = 0; i < coins.length; i++)
        for(var j = 0; j <= exchange; j++)
            coinsSet[i][j] = []

    // Base cases
    for (var i = 0; i < coins.length; i++)
        ds[i][0] = 0

    for (var i = 1; i <= exchange; i++)
        ds[0][i] = i;

    console.log(ds)

    // Recursion to Iteration
    for (var i = 1; i < coins.length; i++)
        for (var j = 1; j <= exchange; j++)
            // When current coin value exceeds remaining exchange, use value of prev coin
            if (coins[i] > j) {
                ds[i][j] = ds[i - 1][j]
                coinsSet[i][j] = coinsSet[i - 1][j]
            }
            // Else get min between previous coin val and using current coin val - give remaining exchange
            else {
                ds[i][j] = min(ds[i - 1][j], 1 + ds[i][j - coins[i]])

                if(ds[i][j] == ds[i - 1][j])
                    coinsSet[i][j] = coinsSet[i - 1][j]
                else
                    coinsSet[i][j] = [...coinsSet[i][j - coins[i]], { coin: coins[i] }]
            }

    return { minimumCoins: ds[coins.length - 1][exchange], set: coinsSet[coins.length - 1][exchange] }
}

// Preset data
var coins = [1, 5, 6, 9], exchange = 11

console.log(minimumCoinChange(coins, exchange))