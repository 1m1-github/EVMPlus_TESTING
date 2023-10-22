// go run reveal_secret_key.go

package main

import (
	"fmt"
	"io/ioutil"

	"github.com/ethereum/go-ethereum/accounts/keystore"
	"github.com/ethereum/go-ethereum/crypto"
)

func main() {
	inPath := "/Users/1m1/chaindata/keystore/UTC--2023-10-22T01-24-52.237179000Z--b316c8ca80e0dce73f3a81338ed97f31fe0a31eb"
	outPath := "key.hex"
	password := ""
	keyjson, e := ioutil.ReadFile(inPath)
	if e != nil {
		panic(e)
	}
	key, e := keystore.DecryptKey(keyjson, password)
	if e != nil {
		panic(e)
	}
	e = crypto.SaveECDSA(outPath, key.PrivateKey)
	if e != nil {
		panic(e)
	}
	fmt.Println("Key saved to:", outPath)
}
