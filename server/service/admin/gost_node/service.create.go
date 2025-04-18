package service

import (
	"errors"
	"github.com/google/uuid"
	"go.uber.org/zap"
	"server/model"
	"server/repository"
	"server/service/common/node_port"
	"strings"
)

type CreateReq struct {
	Name                  string   `binding:"required" json:"name" label:"名称"`
	Remark                string   `json:"remark"`
	Rules                 []string `json:"rules"`
	Tags                  []string `json:"tags"`
	Web                   int      `binding:"required" json:"web" label:"是否启用域名解析"`
	Tunnel                int      `binding:"required" json:"tunnel" label:"是否启用私有隧道"`
	Forward               int      `binding:"required" json:"forward" label:"是否启用端口转发"`
	Proxy                 int      `binding:"required" json:"proxy" label:"是否启用代理隧道"`
	P2P                   int      `binding:"required" json:"p2p" label:"是否启用P2P隧道"`
	Address               string   `binding:"required" json:"address"`
	Protocol              string   `binding:"required" json:"protocol"`
	Domain                string   `json:"domain"`
	DenyDomainPrefix      string   `json:"denyDomainPrefix"`
	UrlTpl                string   `json:"urlTpl"`
	TunnelConnPort        string   `json:"tunnelConnPort"`
	TunnelInPort          string   `json:"tunnelInPort"`
	TunnelMetadata        string   `json:"tunnelMetadata"`
	ForwardConnPort       string   `json:"forwardConnPort"`
	ForwardPorts          string   `json:"forwardPorts"`
	ForwardMetadata       string   `json:"forwardMetadata"`
	TunnelReplaceAddress  string   `json:"tunnelReplaceAddress"`
	ForwardReplaceAddress string   `json:"forwardReplaceAddress"`
	P2PPort               string   `json:"p2pPort"`
	IndexValue            int      `json:"indexValue"`
}

func (service *service) Create(req CreateReq) error {
	db, _, log := repository.Get("")
	if req.Web == 1 && req.Tunnel != 1 {
		req.Web = 2
	}
	if req.Proxy == 1 && req.Forward != 1 {
		req.Proxy = 2
	}
	var node = model.GostNode{
		Key:                   uuid.NewString(),
		Name:                  req.Name,
		Remark:                req.Remark,
		Web:                   req.Web,
		Tunnel:                req.Tunnel,
		Forward:               req.Forward,
		Proxy:                 req.Proxy,
		P2P:                   req.P2P,
		Domain:                req.Domain,
		DenyDomainPrefix:      req.DenyDomainPrefix,
		Address:               req.Address,
		UrlTpl:                req.UrlTpl,
		TunnelConnPort:        req.TunnelConnPort,
		TunnelInPort:          req.TunnelInPort,
		TunnelMetadata:        req.TunnelMetadata,
		TunnelReplaceAddress:  req.TunnelReplaceAddress,
		ForwardConnPort:       req.ForwardConnPort,
		Protocol:              req.Protocol,
		ForwardPorts:          req.ForwardPorts,
		ForwardMetadata:       req.ForwardMetadata,
		ForwardReplaceAddress: req.ForwardReplaceAddress,
		P2PPort:               req.P2PPort,
		Rules:                 strings.Join(req.Rules, ","),
		Tags:                  strings.Join(req.Tags, ","),
		IndexValue:            req.IndexValue,
	}
	if err := db.GostNode.Create(&node); err != nil {
		log.Error("新增节点失败", zap.Error(err))
		return errors.New("操作失败")
	}
	node_port.Arrange(db, node.Code)
	return nil
}
