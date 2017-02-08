// ====================================================================================================
//
// Cloud Code for EV_REDIS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var data = Spark.getData();

Spark.getRedis().sadd(data.SET, data.item);