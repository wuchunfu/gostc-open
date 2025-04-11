package service

type Service interface {
	Start() error
	Stop()
	IsRunning() bool
}
