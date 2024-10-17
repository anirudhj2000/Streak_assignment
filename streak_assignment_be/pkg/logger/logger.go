package logger

import (
	"log"
)

func Init() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)
}

func Info(message string) {
	log.Printf("[INFO] %s", message)
}

func Error(message string) {
	log.Printf("[ERROR] %s", message)
}
